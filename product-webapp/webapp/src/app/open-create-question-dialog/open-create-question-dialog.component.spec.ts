import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCreateQuestionDialogComponent } from './open-create-question-dialog.component';

describe('OpenCreateQuestionDialogComponent', () => {
  let component: OpenCreateQuestionDialogComponent;
  let fixture: ComponentFixture<OpenCreateQuestionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenCreateQuestionDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCreateQuestionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
