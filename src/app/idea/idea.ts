import { Feature } from "../feature/feature";

export interface Idea {
  nid: number;
  title: string;
  field_description: string;
  field_features: Feature[];
  view: string;
}