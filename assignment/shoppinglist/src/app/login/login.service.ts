import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);

  checkuservapass(user: any): Observable<any> {
            
    return this.http.post('http://localhost:3133/login', user, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
  }
}