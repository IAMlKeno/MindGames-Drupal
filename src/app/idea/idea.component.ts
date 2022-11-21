import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Feature } from '../feature/feature';
import { Idea } from './idea';
import { IdeaService } from './idea.service';

@Component({
  selector: 'app-idea',
  templateUrl: './idea.component.html',
  styleUrls: ['./idea.component.css']
})
export class IdeaComponent implements OnInit {

  ideas: Idea[] | undefined;
  features: [number, Feature][] | undefined;
  ideaFormControl = new FormControl('');

  constructor(private ideaService: IdeaService) {}

  ngOnInit() {
    this.getIdeas();
  }

  getIdeas(): void {
    this.ideaService.getIdeas()
      .subscribe((ideas) => {
        ideas.forEach((idea: Idea) => {
          const featureData = JSON.parse(idea.view);
          idea.field_features = [];
          if (featureData.length > 0) {
            featureData.forEach((feature: Feature) => {
              idea.field_features.push(feature);
            });
          }
        })
        this.ideas = ideas;
      });
  }

}
