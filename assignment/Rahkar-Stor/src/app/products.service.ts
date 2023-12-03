import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable ({
  providedIn: 'root'
})

export class ProductsService {
  detail$ = new Subject()
  products: any[] = [
    {
      id: 1,
      name :'table',
      price: '2500$',
      detail: '/assets/miz.png'
    },
    {
        id: 2,
        name :'chair',
        price: '500$',
        detail: '/assets/sandali.jpg'
    },
    {
        id: 3,
        name :'firnichure',
        price: '7500$',
        detail: '/assets/mobl.jpg' 
             }
  ];
  show(){
    return this.products;
  }
      search(id:number):any {
       
        let product = this.products.filter(product =>product.id === id)
        if (product.length>0) {
          this.detail$.next(product);
          // this.router.navigate(['user',])
        }
      }
}