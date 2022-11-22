import { Feature } from '../feature/feature';

export class FeatureModel implements Omit<Feature, 'uuid'> {
  public nid: number | undefined;
  public title: string;
  public field_description: string;
  public field_idea: number | undefined;

  constructor(
    title: string,
    description: string,
    ideaId: number | undefined,
    nid?: number | undefined
  ) {
    this.title = title;
    this.field_description = description;
    this.field_idea = ideaId || undefined;
    this.nid = nid || undefined
  }

}