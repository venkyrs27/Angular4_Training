import { Component, OnInit} from '@angular/core';
import { USER_DATA } from './data/mock';
import { USER } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent implements OnInit{
  title = 'My Application';
  user : USER;
  
  ngOnInit(){
    this.user = USER_DATA;
    console.log("ngOninit");
  }
}
