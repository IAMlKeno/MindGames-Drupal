import { Feature } from "src/app/feature/feature";
import { Idea } from "src/app/idea/idea";

export abstract class MindmapperInterface {
  data: Record<string, any>;

  abstract toMindmap(parameters: MindmapData): Record<string, any>;
}

export interface MindmapData {
  idea: Idea;
  features: Feature[] | [];
}