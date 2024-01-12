import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  http = inject(HttpClient);
  
  
  sabteax(userfile:any): Observable<any> {
    const formData: FormData = new FormData();
    
    
    formData.append('name', userfile.name);
    formData.append('file', userfile.imagefile);
    console.log("formdata");
    console.log(formData);
    
    return this.http.post('http://localhost:3000/sabteax', formData, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
  }



//   sabteax(photo: any): Observable<any> {
            
//     return this.http.post('http://localhost:3133/sabteax', photo, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
   
// }

  showax(photo: any): Observable<any> {
            
    return this.http.get('http://localhost:3133/showax');
  }

  

}