import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Router } from '@angular/router';
import { BlogService } from '../shared/services/blog.service';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.less']
})
export class NewBlogComponent implements OnInit {

  blogForm: FormGroup;
  userEmail: string = "Not logged in";

  createNewBlogForm() {
    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)])
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _blogService: BlogService,
    private _router: Router
  ) { 

  }

  ngOnInit() {
    this.createNewBlogForm();
    console.log(this._authService.getCurrentUser());
    this.userEmail = this._authService.getCurrentUser();
  }

  onBlogSubmit() {
    this.blogForm.disable();
    
    const blog = {
      title: this.blogForm.value.title,
      body: this.blogForm.value.body,
      createdBy: this.userEmail
    };

    this._blogService.createNewArticle(blog).subscribe({
      next: () => this._router.navigate(['/']),
      error: (err) => {
        console.warn(err) 
        this.blogForm.enable()
      } 
    });
    console.log(blog);
    console.log('form submitted');
  }

}
