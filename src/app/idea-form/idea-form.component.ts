import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Feature } from '../feature/feature';
import { Idea } from '../idea/idea';
import { IdeaService } from '../idea/idea.service';
import { FeatureModel } from './feature-model';
import { IdeaModel } from './idea-model';

@Component({
  selector: 'app-idea-form',
  templateUrl: './idea-form.component.html',
  styleUrls: ['./idea-form.component.css']
})
export class IdeaFormComponent implements OnInit {

  @Input() model: IdeaModel;
  @Input() isNew: boolean;

  submitted = false;

  constructor(private ideaService: IdeaService) {}

  ngOnInit(): void {
    if (this.model == undefined) {
      this.newIdea();
    }
    else {
      this.isNew = false;
    }
  }

  newIdea() {
    this.model = new IdeaModel('', '', []);
    this.isNew = true;
  }

  newFeature() {
    const feature = new FeatureModel('', '', '1');
    this.model?.field_features.push(feature as Feature);
  }

  removeFeature(index: number) {
    this.model?.field_features.splice(index, 1);
  }

  showForm() {
    this.newIdea();
    this.submitted = false;
  }

  onSubmit(form: any) {
    if (form.isNew){
       this._createIdeaAndFeaturesInDrupal();
    }
    else {
      this.ideaService.updateIdea(this.model as Idea);
    }
    this.submitted = true;
  }

  private _createIdeaAndFeaturesInDrupal() {
    this.ideaService.insertNewIdeaAndFeatures(this.model as IdeaModel);
  }

}

