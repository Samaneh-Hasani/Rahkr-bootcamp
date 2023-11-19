import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newtask',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './newtask.component.html',
  styleUrl: './newtask.component.scss'
})
export class NewtaskComponent {

  @Output() NewTaskChange= new EventEmitter();
  NewTask: string='';
  onChangeNewTask(event:any){
    this.NewTask=event.target.value;
  }

  onHandleclick(){
    this.NewTaskChange.emit(this.NewTask);
    this.NewTask='';
  }

}
