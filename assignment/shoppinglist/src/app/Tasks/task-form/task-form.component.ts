import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, TaskListComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  taskList: any[] = [
    {
      id: 1,
      title: "",
      isDone: false
    }
  ];
  temp:any[]=[];

  fb = inject(FormBuilder);
  taskService = inject(TaskService);

  taskForm:FormGroup = this.fb.group({
    title: ['', Validators.required]
  });

  


  onClick() {
    
    this.taskService.createTask(this.taskForm.value)
    .subscribe((res) => console.log(res));

    
    
    this.taskService.fetchTask().subscribe((res) => 
    {   
          this.taskList=res;
    }
    );
    
    
    this.taskForm.reset()
  }

  onDeleteTask(taskId: number) {
    console.log(taskId);
  }

  onEditTask(taskId: number) {
    console.log(taskId);
  }

  onDoneTask(taskId: number) {
    console.log(taskId);
  }
}
