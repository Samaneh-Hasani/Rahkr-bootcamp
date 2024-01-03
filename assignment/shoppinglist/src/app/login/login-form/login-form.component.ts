import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  fb = inject(FormBuilder);
  loginService = inject(LoginService);

  loginForm:FormGroup = this.fb.group({
    username: [''],
    password: ['']
  });

  onClick(){
    this.loginService.checkuservapass(this.loginForm)
    .subscribe((res) => console.log(res));
  }
  
}
