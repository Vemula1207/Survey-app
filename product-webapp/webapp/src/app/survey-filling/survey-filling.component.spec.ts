import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyFillingComponent } from './survey-filling.component';

describe('SurveyFillingComponent', () => {
  let component: SurveyFillingComponent;
  let fixture: ComponentFixture<SurveyFillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyFillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyFillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
