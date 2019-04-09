import { Component, OnInit } from '@angular/core';

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
    this.createNewBlogForm();
  }

  ngOnInit() {
  }

}
