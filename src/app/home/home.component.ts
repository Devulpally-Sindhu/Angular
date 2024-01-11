import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskName:string='';
  tasks:any[]=[]

  constructor() { }

  ngOnInit(): void {
    
  }

  addTask(){
    this.tasks.push(this.taskName);

  }

  deleteTask(i:number){
    this.tasks.splice(i,1)
  }

}
