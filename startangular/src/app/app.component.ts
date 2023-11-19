import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, BodyComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'startangular';
  isshowingnavbar: boolean=true;
  lastname:string="";
  ngOnInit():void{
  setTimeout(() => {
    this.isshowingnavbar=false;
    console.log("5second later");
  }, 5000);
  }
  onHandeLastname(lastname:string){
  this.lastname=lastname;
  }
}
