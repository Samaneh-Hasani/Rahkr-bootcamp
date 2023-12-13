import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {

  constructor(private http:HttpClient) { }


 
  sendMessage(chat_id:number,text:string,reply_markup:any){
    console.log(reply_markup);
    
    var data={
      chat_id:chat_id,
      text:text,
      reply_markup:{keyboard:reply_markup}
    }
    return this.http.post( `https://api.telegram.org/bot6711129714:AAHnm6LcwLaXtTuoCH3RKw0E0RoRL9Djs6Q/sendMessage`,data)
  }
  
}
