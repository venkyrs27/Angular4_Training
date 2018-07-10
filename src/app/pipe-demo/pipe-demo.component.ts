import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  filterStatus = "";

  addTodo(){
    this.todos.push({
      label : "New Work",
      status : 'pending'
    })
  }

  todos = [
    {
  label : 'Some work',
  status : 'done'    
  },
  {
    label : 'Some work',
    status : 'pending'
  },
  {
    label : 'No work',
   status : 'done'
  }
]

  contact_number : number = 989542100;

  data = new Promise((resolve, reject) =>{

    setTimeout(()=>{
      resolve("Data Arrives now")
    },800);

  });

  constructor() { }

  ngOnInit() {
  }


}
