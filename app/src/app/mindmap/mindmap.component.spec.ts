import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MindmapComponent } from './mindmap.component';

describe('MindmapComponent', () => {
  let component: MindmapComponent;
  let fixture: ComponentFixture<MindmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MindmapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MindmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
