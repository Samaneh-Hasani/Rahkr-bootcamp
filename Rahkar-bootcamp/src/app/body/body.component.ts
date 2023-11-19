import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  isuserlogin: boolean=false;
menuListItems: any[]=[
  {
    title:"git",
    link:"http1"
  },
  {
    title:"git2",
    link:"http12"
  }
];
obj={
  name:"ali",
  age:23,
  uni:{
    name:"znu",
  }

}
ngOnInit(): void{
  console.log(this.obj.uni.name);
}
fontcolor(){
if(this.isuserlogin)return 'yellow';
else return 'red';

}
clicckfun(){
  this.isuserlogin=!this.isuserlogin;
  this.menuListItems.push("login");
}
}
