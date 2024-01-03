import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  http = inject(HttpClient);

  insertuser(user: any): Observable<any> {
            
    return this.http.post('http://localhost:3133/register', user, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
  }
}