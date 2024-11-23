export interface Idea {
  nid: number | undefined;
  uuid: string | undefined;
  title: string;
  field_description: string | undefined;
  field_features: any[];
  view: string | undefined;
}