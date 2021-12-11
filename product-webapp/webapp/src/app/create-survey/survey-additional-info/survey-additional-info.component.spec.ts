import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAdditionalInfoComponent } from './survey-additional-info.component';

describe('SurveyAdditionalInfoComponent', () => {
  let component: SurveyAdditionalInfoComponent;
  let fixture: ComponentFixture<SurveyAdditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyAdditionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
