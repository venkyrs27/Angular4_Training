import { Component, OnInit} from '@angular/core';
//import { USER_DATA } from './data/mock';
import { USER } from './model/user';
import { Dataservice } from './service/data.service';
import * as firebase  from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent implements OnInit{
  title = 'My Application';
  users : USER[];

  constructor(private dataService : Dataservice){  
  }

  ngOnInit(){
    console.log("ngOninit");
    // this.dataService.getJsonData().
    //   subscribe(data=>this.users=data,err=>console.log(err),()=>console.log("COMPLETED"));

    firebase.initializeApp({
      apiKey: "AIzaSyDO7YgrobWcqGKOljin8yCt-3c_zei8Wo4",
      authDomain: "api-project-536794146430.firebaseapp.com"
    });

    this.dataService.getApiData().subscribe(data=>this.users=data);
  }

  
}
