import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  http = inject(HttpClient);
  
  
  sabteax(userfile:any): Observable<any> {
    
    
    return this.http.post('http://localhost:3000/sabteax', userfile);    
    // , {headers:new HttpHeaders({"Content-Type":"Application/x-www-form-urlencoded"})});
  }



//   sabteax(photo: any): Observable<any> {
            
//     return this.http.post('http://localhost:3133/sabteax', photo, {headers:new HttpHeaders({"Content-Type":"Application/x-www-form-urlencoded"})})
   
// }

  showax(): Observable<any> {
            
    return this.http.get('http://localhost:3000/showax');
  }

  

}