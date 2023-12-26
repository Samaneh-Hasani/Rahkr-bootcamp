import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class TaskService {

  http = inject(HttpClient);

  createTask(task: any): Observable<any> {
            
    return this.http.post('http://localhost:3133/taskadd', task, {headers:new HttpHeaders({"Content-Type":"Application/json"})});
  }

  fetchTask(): Observable<any> {
   
    return this.http.get('http://localhost:3133/taskshow');
  }


}
