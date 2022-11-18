import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdeaModel } from './idea-model';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  model = new IdeaModel({title: 'titke', field_description: 'description', field_features: []});
  // formData;

  ngOnInit(): void {
    // this.formData = new FormGroup({
    //   idea: new FormControl('idea'),
    // });
  }
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('submitted');
  } 

}
