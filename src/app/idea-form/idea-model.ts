import { Feature } from '../feature/feature';
import { Idea } from '../idea/idea';

export class IdeaModel<Idea> {

  title: string;
  field_description: string;
  field_features: Feature[];
  nid: number | undefined;

  constructor(
    options: {
      title: string,
      field_description: string,
      field_features: Feature[],
      nid?: number
    }
  ) {
    this.title = options.title;
    this.field_description = options.field_description || '';
    this.field_features = options.field_features || [];
    this.nid = options.nid || undefined;
  }

}