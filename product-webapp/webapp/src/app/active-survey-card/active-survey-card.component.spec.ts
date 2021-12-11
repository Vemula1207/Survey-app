import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSurveyCardComponent } from './active-survey-card.component';

describe('ActiveSurveyCardComponent', () => {
  let component: ActiveSurveyCardComponent;
  let fixture: ComponentFixture<ActiveSurveyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveSurveyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSurveyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
