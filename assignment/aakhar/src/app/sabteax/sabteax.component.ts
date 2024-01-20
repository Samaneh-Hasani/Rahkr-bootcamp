import { Component,ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ShowComponent } from '../show/show.component';

@Component({
  selector: 'app-sabteax',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule,ShowComponent],
  templateUrl: './sabteax.component.html',
  styleUrl: './sabteax.component.scss'
})
export class SabteaxComponent {
  
show:boolean=false;
  @ViewChild('fileInput') fileInput:ElementRef|undefined;
  
  photoService = inject(PhotoService);
  router=inject(Router);

  onFileSelected(event:any){
    const file:File=event.target.files[0];
  }
  
  name=new FormControl('',[Validators.required]);


  uploadFile(){    
    const formData: FormData = new FormData();
    const fileInput:HTMLInputElement|null=document.getElementById(
      'fileInput'
    ) as HTMLInputElement;
      if(fileInput && fileInput.files && fileInput.files.length>0 ){
        formData.append('name', this.name.value!);
          formData.append('file', fileInput.files[0]);
          console.log("formdata:",formData);
    
  this.photoService.sabteax(formData).subscribe({
    next: (data) => {
            console.log(data);
            this.show=true;         
      
    }
      
    })
  }
}


showFiles(){
  this.router.navigateByUrl("show");
}
}
