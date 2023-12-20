import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './posts.service';
import { IProductRequestPayload } from './product-request.interface';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.scss'
})
export class GetApiComponent {
  postService = inject(PostService);

  products: any[] = [];
  defaultPagination: IProductRequestPayload = {
    categoryId: 1,
    page: {
      pageNumber: 1,
      itemCountInPage: 10,
    }
  };

  activePage: number = 1;

  pagination!: any[];

  ngOnInit(): void {
    this.getProducts(this.defaultPagination);
  }

  getProducts(body: IProductRequestPayload): void {
    this.postService.getPosts(body).subscribe({
      next: (data: any) => {
        this.products = data.firstPageProducts;
        this.createTablePagination(data.totalCountOfProducts);
      }
    });
  }

  createTablePagination(totalNumber: number) {
    let pages = Math.floor(totalNumber / this.defaultPagination.page.itemCountInPage);
    this.pagination = new Array(pages);
  }

  onChangePagination(pageNumber: number) {
    this.activePage = pageNumber;
    this.getProducts({
      categoryId: 1,
      page: {
        pageNumber: pageNumber,
        itemCountInPage: 10
      }
    });
  }
}
