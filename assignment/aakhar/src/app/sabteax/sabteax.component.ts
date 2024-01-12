import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-sabteax',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule],
  templateUrl: './sabteax.component.html',
  styleUrl: './sabteax.component.scss'
})
export class SabteaxComponent {

  
  fb = inject(FormBuilder);
  photoService = inject(PhotoService);

  myform:FormGroup = this.fb.group({
    name: [''],
    imagefile:File
  });
  onClick(){
    console.log(this.myform.value);
    
  this.photoService.sabteax(this.myform.value).subscribe({
    next: (data) => {
            console.log(data);
            
      
    }
      
    })
}
}
