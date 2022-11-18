import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { IdeaComponent } from './idea/idea.component';
import { FeatureComponent } from './feature/feature.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    IdeaComponent,
    FeatureComponent,
    IdeaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
