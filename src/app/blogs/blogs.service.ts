import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Blog } from "./blog";

@Injectable({
  providedIn: 'root'
})

export class BlogsService {

  private blogUrl = 'http://localhost/api/blogs?_format=json';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.blogUrl);
  }

}