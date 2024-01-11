import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isClicked:boolean=false;

  numbers:any[]=[1,19,12,14,91];
  students:any[]=["sindhu","amma","dady","keerthi"]

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    this.isClicked=!this.isClicked
  }

}
