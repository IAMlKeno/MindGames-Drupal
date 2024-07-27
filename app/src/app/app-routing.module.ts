import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BlogsComponent } from './blogs/blogs.component';
import { IdeaComponent } from './idea/idea.component';
import { MindmapComponent } from './mindmap/mindmap.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'ideas', component: IdeaComponent },
  { path: 'mindmap', component: MindmapComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
