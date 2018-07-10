
import { Component, Input } from '@angular/core';
import { USER } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

@Input('title') title : string;  
@Input('user') user : USER;
  
  moreInfo(user : USER){
    alert(user.firstName + " is the founder of "+  `${user.company}`);
  }

}
