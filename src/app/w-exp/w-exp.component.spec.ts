import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WExpComponent } from './w-exp.component';

describe('WExpComponent', () => {
  let component: WExpComponent;
  let fixture: ComponentFixture<WExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
