import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { PhotoService } from '../photo.service';



@Component({
  selector: 'app-show',
  standalone: true,
  imports: [CommonModule , ReactiveFormsModule, RouterModule],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  photoService = inject(PhotoService);
  router=inject(Router);
  images:any[]=[
    {
     id:0,
      name:'',
      url:''
    }
  ];
  
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  

  
  this.photoService.showax().subscribe({
    next: (data) => {
      console.log("show data", data);
      
            this.images=data;
            console.log("this.images", this.images);
            
            
           }      
    })
}
addMore(){
this.router.navigateByUrl("sabt");
}
}
