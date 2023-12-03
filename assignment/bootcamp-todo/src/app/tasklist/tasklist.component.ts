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

arraytask:any[]=[];
ngOnChanges(){
  this.arraytask.push({title:this.listItem, done:false});
  console.log("th")
}

}
