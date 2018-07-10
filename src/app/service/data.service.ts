import { Injectable } from "@angular/core";
import { USER_DATA } from "../data/mock";
import { Http } from "@angular/http";
import { HttpClient } from "@angular/common/http";

import 'rxjs/add/operator/map';
import { USER } from '../model/user';


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
    return this.httpClient.get<USER[]>("https://api-project-536794146430.firebaseio.com/userdata.json");
}

constructor(private http : Http, private httpClient : HttpClient){}

} 