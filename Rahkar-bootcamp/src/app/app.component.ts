import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, Navbar2Component, BodyComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rahkar-bootcamp';
  name="samaneh";
  age=35;
  tafrigh(a:number, b: number){
if((a-b)>0)
    return (a-b);
else
return;
  }
  isshowing=true;
  constructor(){
    console.log("sa");
    setTimeout(() => {
       this.isshowing=false; 
    }, 2000);
  }

}

