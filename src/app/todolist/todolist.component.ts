import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  @Input() taskTitle:string=" ";
  @Input() ind:number|undefined;
  @Output() delEvent=new EventEmitter()



  delTask(i:any){
    this.delEvent.emit(i)


  }



  


}
