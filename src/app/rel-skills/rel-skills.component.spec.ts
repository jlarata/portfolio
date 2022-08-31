import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelSkillsComponent } from './rel-skills.component';

describe('RelSkillsComponent', () => {
  let component: RelSkillsComponent;
  let fixture: ComponentFixture<RelSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
