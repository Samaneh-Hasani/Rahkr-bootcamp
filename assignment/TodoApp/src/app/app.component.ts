import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddNewTaskComponent } from './add-new-task/add-new-task.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddNewTaskComponent, HeaderComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TodoApp';
}
