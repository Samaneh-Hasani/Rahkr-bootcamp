import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  constructor(private fb:FormBuilder,
    private registerService:RegisterService
    ){

  }
  registerForm:FormGroup=this.fb.group({

    username:[''],
    password:['']
  })

  onClick(){
    this.registerService.insertuser(this.registerForm.value).subscribe({
      next:(data)=>{
        console.log(data);

      }
      
    })
  }
}
