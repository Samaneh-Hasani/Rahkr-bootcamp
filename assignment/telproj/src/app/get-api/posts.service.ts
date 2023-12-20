import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductRequestPayload } from './product-request.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  http = inject(HttpClient);

  getPosts(body: IProductRequestPayload): Observable<any> {
    return this.http.post('https://api.bazaarvar.com/api/Product/GetFirstPageProductsByFilterForIndex', body);
  }

  createNewPost(body: any): Observable<any> {
    return this.http.post("https://jsonplaceholder.typicode.com/posts", body);
  }
}
