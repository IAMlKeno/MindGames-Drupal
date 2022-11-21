import { Feature } from '../feature/feature';
import { Idea } from '../idea/idea';

export class IdeaModel implements Omit<Idea, "view"> {

  public title: string;
  public field_description: string;
  public field_features: Feature[];
  public nid: number | undefined;

  // constructor(
  //   options: {
  //     title: string,
  //     field_description: string,
  //     field_features: Feature[],
  //     nid?: number
  //   }
  // ) {
  //   this.title = options.title;
  //   this.field_description = options.field_description || '';
  //   this.field_features = options.field_features || [];
  //   this.nid = options.nid || undefined;
  // }
  constructor(
    title: string,
    field_description: string,
    field_features?: Feature[],
    nid?: number
  ) {
    this.title = title;
    this.field_description = field_description || '';
    this.field_features = field_features || [];
    this.nid = nid || undefined;
  }

}