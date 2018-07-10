
import { Component, Input } from '@angular/core';
import { USER } from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {

@Input('title') title : string;  
@Input('users') users : USER[];

myColor : string;

myClasses = {
  myBorder : true,
  myText : false
}
  
  moreInfo(user : USER){
    this.myClasses.myBorder = !this.myClasses.myBorder;
    this.myClasses.myText = !this.myClasses.myText;
    alert(user.firstName + " is the founder of "+  `${user.company}`);
  }

}
