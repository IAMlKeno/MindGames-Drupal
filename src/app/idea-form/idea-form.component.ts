import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IdeaModel } from './idea-model';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  model = new IdeaModel( 'titke', 'description', []);
  submitted = false;
  // formData;

  ngOnInit(): void {
    // this.formData = new FormGroup({
    //   idea: new FormControl('idea'),
    // });
  }

  newIdea() {
    this.model = new IdeaModel('', '', []);
  }

  showForm() {
    this.newIdea();
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    console.log('submitted');
    console.debug(this.model);
  } 

}
