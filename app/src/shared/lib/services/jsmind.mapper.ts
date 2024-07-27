import { MindmapData, MindmapperInterface } from "./mindmapper.interface";

export class JsMindmapper extends MindmapperInterface {

  override toMindmap(parameters?: MindmapData): Record<string, any> {
    var mind: Record<string, any> = {
      format: 'nodeTree',
      data: {
        id: 43,
        topic: 'Idea',
        selectedType: false,
        backgroundColor: '#7EC6E1',
        children: []
      }
    };

    return mind;
  }

}
