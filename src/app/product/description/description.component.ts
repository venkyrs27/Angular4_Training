import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  id : number;
  constructor(private route : ActivatedRoute) { 
   // this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
    })
  }

  ngOnInit() {
  }

}