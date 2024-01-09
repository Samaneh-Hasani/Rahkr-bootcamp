import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginregisterService } from '../app/loginregister.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  loginregisterservice = inject(LoginregisterService);

  myform:FormGroup = this.fb.group({
    username: [''],
    password: ['']
  });
  onClick(){
    this.loginregisterservice.register(this.myform)
    .subscribe((res) => console.log(res));
  }
}
