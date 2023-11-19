import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent {
@Input() listItem!:string;
expression:boolean=false;
arraytask:any[]=[];
ngOnInit():void{
  this.arraytask.push(this.listItem);
  this.expression=true;
}

}
