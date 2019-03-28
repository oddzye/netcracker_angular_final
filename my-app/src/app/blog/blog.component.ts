import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less']
})
export class BlogComponent implements OnInit {
  private _faPencilAlt = faPencilAlt;
  private _newPost = false;
  private _loadingBlogs = false;

  newBlogForm() {
    this._newPost = true;
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
  constructor() { }

  ngOnInit() {
  }

}
