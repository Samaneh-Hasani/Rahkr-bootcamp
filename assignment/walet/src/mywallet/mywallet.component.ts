import { Component,inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { LoginregisterService } from '../app/loginregister.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-mywallet',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule],
  templateUrl: './mywallet.component.html',
  styleUrl: './mywallet.component.scss'
})
export class MywalletComponent {
  router=inject(Router)
  fb = inject(FormBuilder);
  loginregisterservice = inject(LoginregisterService);

  myform:FormGroup = this.fb.group({
    money: [0],
  });
  onClick(){
    this.loginregisterservice.charging(this.myform.value.money).subscribe({
      next: (data) => {
              
        this.router.navigateByUrl("home")
      }
      
    })
  }
}
