import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service'
import { BlogService } from '../shared/services/blog.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  private _faPencilAlt = faPencilAlt;
  private _newPost: boolean = false;
  private _loadingBlogs = false;
  blogForm: FormGroup;
  userEmail: string = "Not logged in";

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private _blogService: BlogService,
    private _router: Router

  ) { 
    this.createNewBlogForm()
  }
  
  createNewBlogForm() {
    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)])
    });
  }

  newBlogForm() {
    this._newPost = true;
  }

  hideNewBlogForm() {
   window.location.reload();
  }

  draftComment() {

  }
  
  reloadBlogs() {
    this._loadingBlogs = true;
    //Get Add Blogs 
    setTimeout(() => {
      this._loadingBlogs = false;
    }, 4000);
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

  ngOnInit() {
    this.blogForm = new FormGroup({
      title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
      body: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(500)])
    });
    console.log(this._authService.getCurrentUser());
    this.userEmail = this._authService.getCurrentUser();
   
  }

}
