import {Directive, ElementRef, HostListener, HostBinding, Input} from '@angular/core'

@Directive({
    selector : '[apphighlight]'
})

export class HighLightDirective{

    @Input('myColor') myColor : string; 
    @Input('defaultColor') defaultColor : string; 

    @HostBinding('style.backgroundColor') bgColor : string;

    @HostListener('mouseenter') mouseenter(){
        //alert("Mouse Entered");
        //this.elementRef.nativeElement.style.backgroundColor = "aqua";
        this.bgColor = this.myColor;
    }
    @HostListener('mouseleave') mouseleave(){
        //alert("Mouse Entered");
        //this.elementRef.nativeElement.style.backgroundColor = "transparent";
        this.bgColor = this.defaultColor;
    }

    constructor(private elementRef : ElementRef){
       // console.log(this.elementRef.nativeElement);
        //this.elementRef.nativeElement.style.backgroundColor = "transparent";
    }
}