import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, NewtaskComponent, TasklistComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootcamp-todo';
  newtask:string='';
  
    onHandleNewTask(NewTask:string){
      this.newtask=NewTask;
    }
  
  
}
