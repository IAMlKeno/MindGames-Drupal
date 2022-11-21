import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FeatureModel } from './feature-model';
import { IdeaModel } from './idea-model';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  model = new IdeaModel('titke', 'description', [new FeatureModel('t1', 't1d', 1), new FeatureModel('t2', 't2d', 1)]);
  // featureModel: FeatureModel | undefined;
  submitted = false;
  // formData: FormGroup;

  ngOnInit(): void {
    // this.formData = new FormGroup({
    //   idea: new FormControl('idea'),
    // });
  }

  newIdea() {
    this.model = new IdeaModel('', '', []);
  }

  newFeature() {
    console.log('adding new feature to form');
    // const feature = new FeatureModel('', '', this.model.nid);
    const feature = new FeatureModel('', '', 1);
    this.model.field_features.push(feature);
  }

  removeFeature(index: number) {
    // console.log(`index passed: ${index}`);
    this.model.field_features.splice(index, 1);
  }

  showForm() {
    this.newIdea();
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
    // console.log('submitted');
    console.debug(this.model);
    this.createIdeaAndFeaturesInDrupal();
  }

  createIdeaAndFeaturesInDrupal() {
    console.log('doing the stuff');
  }
}

