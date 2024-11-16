import { Component, Input } from '@angular/core';
import { Feature } from './feature';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent {
  @Input() features: Feature[] | undefined;

  constructor() {}
}
