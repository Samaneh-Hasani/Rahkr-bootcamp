import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-detailproduc',
  standalone: true,
  imports: [],
  templateUrl: './detailproduc.component.html',
  styleUrl: './detailproduc.component.scss'
})
export class DetailproducComponent {
  
constructor(private products:ProductsService){

}
}
