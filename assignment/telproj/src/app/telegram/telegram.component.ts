import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {TelegramService} from "./telegram.service"
import { Telegram2Service } from './telegram2.service';
@Component({
  selector: 'app-telegram',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ReactiveFormsModule],
  templateUrl: './telegram.component.html',
  styleUrl: './telegram.component.scss',
})
export class TelegramComponent {
  constructor(private telegramService: TelegramService,private telegram2Service: Telegram2Service,
    private formBuilder: FormBuilder
    ) {}
  caht_id: number[] = [107670025];
  ngOnInit(): void {
    this.addItems()
  }
  errorMessage:string|null = null;
  form:FormGroup=this.formBuilder.group({
    text:["",Validators.required],
    image:["",Validators.required],
    caption:["",Validators.required],
    NumberInLine:["",Validators.required],
    items:this.formBuilder.array([])
  })


  get items():FormArray{
    return this.form.get('items') as FormArray;
  }

  addItems(){
    this.items.push(this.formBuilder.group({
      name:[""]
    }))
  }

  removeAt(index:number){
    this.items.removeAt(index)
  }

  
  convertlistToTelegramFormat(list:any[])
  {
     
     const colNumber=Number(this.form.value.NumberInLine)
      var arrayOfTelegramFormat:any=  []
      var rowNumber=Math.ceil(list.length/colNumber)
      
      for(var control=0;control<list.length;)
      {
              for(let i=0;i<rowNumber;i++)
              {
                          let arrayRow=[];
                          for(let j=0;j<colNumber;j++)
                          {                                  
                              arrayRow.push({text:list[control].name,callback_data:list[control].name})
                              control++;
                              if(control===list.length){break;}

                            }     
                          arrayOfTelegramFormat.push(arrayRow)                        
                }
        }         
      return arrayOfTelegramFormat
  }

  submite(){
    this.errorMessage=null
    if (this.form.valid) 
    {

        this.telegramService.sendMessage(
          this.caht_id[0],
          this.form.get('text')?.value,
          this.convertlistToTelegramFormat(this.items.value)
          ).subscribe(data=>{

          })
          

        this.telegram2Service.sendPhoto( 
          this.caht_id[0],
          this.form.get('image')?.value,
          this.form.get('caption')?.value
          ).subscribe(data=>{

          })

     }


      else{
       this.errorMessage="text is empty"

      }
  }
 
}
