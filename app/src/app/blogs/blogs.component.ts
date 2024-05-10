import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';

import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  blogs: Blog[] | undefined;

  constructor(private blogsService: BlogsService) {}

  ngOnInit() {
    this.getBlogs();
  }

  getBlogs(): void {
    this.blogsService.getBlogs()
      .subscribe(blogs => this.blogs = blogs);
  }

}
