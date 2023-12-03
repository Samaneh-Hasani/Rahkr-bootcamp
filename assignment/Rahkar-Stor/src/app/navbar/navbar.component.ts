import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  userIsLogin :boolean=false;

  constructor(private router: Router,  public AuthService: AuthService) {
       this.AuthService.login$.subscribe((data: any) => {      
      this.userIsLogin=data;
      console.log("az data navbar constructor ",data);   
      console.log("az userIsLogin navbar constructor ",this.userIsLogin); 
    }
    )
  }
}
