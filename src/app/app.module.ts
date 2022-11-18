import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { IdeaComponent } from './idea/idea.component';
import { FeatureComponent } from './feature/feature.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DynamicFormComponent } from './dynamic-form.component';
// import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    IdeaComponent,
    FeatureComponent,
    IdeaFormComponent,
    // DynamicFormComponent,
    // DynamicFormQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
