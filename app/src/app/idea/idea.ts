import { Feature } from "../feature/feature";

export interface Idea {
  nid: number | undefined;
  uuid: string;
  title: string;
  field_description: string;
  field_features: Feature[];
  view: string;
}