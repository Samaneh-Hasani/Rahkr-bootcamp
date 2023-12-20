import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PlayernameService {
    http=inject(HttpClient)
    
    sendplyernametoserver(player1:string,player2:string): Observable<any>
    {
      var data={player1:player1,player2:player2}
      return this.http.post('http://localhost:3133', data, {headers:new HttpHeaders({"Content-Type":"Application/json"})});

    }

    getplayernamefromserver(): Observable<any>
    {
      
      return this.http.get('http://localhost:3133');

    }


}