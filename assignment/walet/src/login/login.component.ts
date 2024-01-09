import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { LoginregisterService } from '../app/loginregister.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  router = inject(Router)
  fb = inject(FormBuilder);
  loginregisterservice = inject(LoginregisterService);

  myform:FormGroup = this.fb.group({
    username: [''],
    password: ['']
  });
  onClick(){
  this.loginregisterservice.login(this.myform).subscribe({
      next: (data) => {
       
        console.log(data);

        this.loginregisterservice.setTokenToLocalStorage(data)
        this.router.navigateByUrl("mywallet")
      }
      
    })
}
}
