import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'countrycode'
})

export class CountryCodePipe implements PipeTransform{

    transform(value : any, args : any){
        var val;
        if(args == 'IND'){
            val = "+91 "+value;
        }else{
            val ="+01 "+value;
        }
        return val;
    }
}