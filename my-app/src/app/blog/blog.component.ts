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

  newBlogForm() {
    this._newPost = true;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
