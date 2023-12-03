import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-produc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produc.component.html',
  styleUrl: './produc.component.scss'
})
export class ProducComponent {
  product:any[]=[];
  products:any[]=[];
constructor(public a:ProductsService){
  this.products=a.show();
  
}
  seemore(id:number){
    this.a.search(id);
    this.a.detail$.subscribe((data: any) => {
      this.product=data;
  })
  }
}
