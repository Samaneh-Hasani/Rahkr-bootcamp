import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.scss'
})
export class PostFormComponent {

  formBuilder = inject(FormBuilder);
  postService = inject(PostService);
  router = inject(Router);
  formGroup!: FormGroup;

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      title: [''],
      body: [''],
      userId: [''],
    });
  }

  onSubmitForm() {
    this.postService.createNewPost(this.formGroup.value).subscribe({
      next: (res: any) => {
        if (res) {
          this.router.navigateByUrl("get/api");
        }
      },
      error: (err: any) => {
        alert(`status: ${err.status} Message: ${err.message}`)
      }
    })

  }
}
