import { Injectable } from "@angular/core";
import { USER_DATA } from "../data/mock";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map';
import { USER } from '../model/user';
import { AuthService } from './auth.service';


@Injectable()
export class Dataservice{

getUserData(){ 
    return USER_DATA;
}

getJsonData(){
    return this.http.get("assets/data/user-data.json")
    .map(response=> <USER[]> response.json().userdata);
}

getApiData(){
     // return this.httpClient
    //     .get<User[]>("https://fir-soc-gen.firebaseio.com/userdata.json",{
    //         params : new HttpParams().set("auth", this.authService.getToken())
    //     });
    // return this.httpClient
     // .get<USER[]>("https://fir-soc-gen.firebaseio.com/userdata.json?auth="+this.authService.getToken() );

     return this.httpClient
     .get<USER[]>("https://fir-soc-gen.firebaseio.com/userdata.json");
 }

constructor(private http : Http, private httpClient : HttpClient, private  authService : AuthService){}

} 