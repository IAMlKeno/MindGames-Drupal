import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { BlogsComponent } from './blogs/blogs.component';
import { IdeaComponent } from './idea/idea.component';

const routes: Routes = [
  { path: 'blogs', component: BlogsComponent },
  { path: 'ideas', component: IdeaComponent }
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
