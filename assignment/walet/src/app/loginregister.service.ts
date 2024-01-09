import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginregisterService {

  http = inject(HttpClient);
  isLogin: boolean=false;
  username: string='';
  private readonly _authStorageToken: string = "authToken";
  token !: any

  login(user: any): Observable<any> {
            
    return this.http.post('http://localhost:3133/login', user, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
    this.username=user.username;
}

  register(user: any): Observable<any> {
            
    return this.http.post('http://localhost:3133/register', user, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
  }

  setTokenToLocalStorage(token : any) {
    localStorage.setItem(this._authStorageToken, token);
    this.isLogin = true;
    
  }

  charging(money: any): Observable<any> {
      var data={
        money:money,
        username:this.username
      }
            
    return this.http.post('http://localhost:3133/charg', data, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
  }

}