import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Telegram2Service {

  constructor(private http:HttpClient) { }


 
  
  sendPhoto(chat_id:number,image:string,caption:string){

  var data={
      chat_id:chat_id,
      photo:image,
      caption:caption,
    }
    return this.http.post( `https://api.telegram.org/bot6711129714:AAHnm6LcwLaXtTuoCH3RKw0E0RoRL9Djs6Q/sendPhoto`,data)
  }
}
