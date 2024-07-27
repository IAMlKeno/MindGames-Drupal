import { Component, OnInit } from "@angular/core";
import { customizeUtil, MindMapMain } from "angular-mindmapping";
import { JsMindmapper } from "src/shared/lib/services/jsmind.mapper";

const HIERARCHY_RULES = {
  ROOT: {
    name: 'Company',
    backgroundColor: '#7EC6E1',
    getChildren: () => [
      HIERARCHY_RULES.SALES_MANAGER,
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_MANAGER: {
    name: 'Work Plan',
    color: '#fff',
    backgroundColor: '#616161',
    getChildren: () => [
      HIERARCHY_RULES.SHOW_ROOM,
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SHOW_ROOM: {
    name: 'Job',
    color: '#fff',
    backgroundColor: '#989898',
    getChildren: () => [
      HIERARCHY_RULES.SALES_TEAM
    ]
  },
  SALES_TEAM: {
    name: 'Task',
    color: '#fff',
    backgroundColor: '#C6C6C6',
    getChildren: () => []
  }
};

const option = {
  container: 'jsmind_container',
  theme: 'normal',
  editable: true,
  selectable: false,
  depth: 4,
  hierarchyRule: HIERARCHY_RULES,
  enableDraggable: true,
};

@Component({
  selector: 'my-app',
  templateUrl: './mindmap.component.html',
  styleUrls: ['./mindmap.component.css'],
})
export class MindmapComponent implements OnInit {
  mindmapData = [];

  mindMap: { getSelectedNode: () => any; removeNode: (arg0: any) => void; addNode: (arg0: any, arg1: any) => void; getData: () => { (): any; new(): any; data: any; }; };
  mindd: Record<string, any>;

  constructor() {
    this.mindd = new JsMindmapper().toMindmap();
  }

  ngOnInit() {
    this.mindMap = MindMapMain.show(option, this.mindd);
  }

  removeNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    const selectedId = selectedNode && selectedNode.id;

    if (!selectedId) {
      return;
    }
    this.mindMap.removeNode(selectedId);
  }

  addNode() {
    const selectedNode = this.mindMap.getSelectedNode();
    if (!selectedNode) {
      return;
    }

    const nodeId = customizeUtil.uuid.newid();
    this.mindMap.addNode(selectedNode, nodeId);
  }

  getMindMapData() {
    const data = this.mindMap.getData().data;
    console.log('data: ', data);
  }
  // send data and get constructed data to render
  // var data = mindmapperInterface.prepareData(mindmapData);
  // render in html
}