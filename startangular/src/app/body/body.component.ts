import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  @Output() lastnameChange= new EventEmitter();
  Lastname:string="";
  OnChangeFirstname(event:any){
    console.log(event.target.value);
  }
  OnChangeLastname(event:any){
    this.Lastname=event.target.value;

  }
  onHandleClick(){
    this.lastnameChange.emit(this.Lastname);
  }
}
