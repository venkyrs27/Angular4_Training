import { Directive,Input,TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //setter
  @Input("appUnless") set appUnless(condition : boolean){

    if(!condition){
      this.vRef.createEmbeddedView(this.templateRef);
    }else{
      this.vRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>, private vRef : ViewContainerRef) { 
      console.log(templateRef);
  }

}
