import { Component, numberAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl, FormsModule } from '@angular/forms';
import { PlayernameService } from './playername.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';



@Component({
  selector: 'app-playing',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './playing.component.html',
  styleUrl: './playing.component.scss'
})
export class PlayingComponent {
  constructor(private formBuilder: FormBuilder,private PlayernameService:PlayernameService) {}
  http=inject(HttpClient) 
  form:FormGroup=this.formBuilder.group({
      player1:[""],
      player2:[""]
    })
    players:any=[{playerName:'',scor:0}];
    
    flag1:boolean=false;
    flag2:boolean=false;

onClick()
{
    if(this.form.valid)
    {
      this.PlayernameService.sendplyernametoserver(this.form.value.player1,this.form.value.player2).subscribe(data =>{
      console.log("the names have been sent");  })
      
      this.PlayernameService.getplayernamefromserver().subscribe(data =>{
      this.players.push({playerName:data.player1,scor:0})
      this.players.push({playerName:data.player2,scor:0})
      console.log("the names come from server");
      this.flag1=true; })
      
    }
}

RandomRoll()
{
    if(!this.flag2)
    {
        let randomNumber:number=(1 + Math.floor(Math.random() * 6));
        
          if(randomNumber<4){ console.log(randomNumber); this.players[1].scor++}
          else {console.log(randomNumber); this.players[2].scor++}

        
        if(this.players[1].scor==5){console.log("player1 win"); this.flag2=true;alert("winer is :"+this.players[1].playerName)}
        if(this.players[2].scor==5){console.log("player2 win"); this.flag2=true;alert("winer is :"+this.players[2].playerName)}
    }
    
    
}

}
