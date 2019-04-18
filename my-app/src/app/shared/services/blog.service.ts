import { Injectable } from '@angular/core';
import { Blog } from '../interfaces'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {   }

  createNewArticle(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>('/api/blogs/newBlog', blog);
  } 

  getAllBlogs() {
    return this.http.get('api/blogs/allBlogs');
  }
}
