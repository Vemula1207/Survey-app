import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuestionGroupDialogComponent } from './create-question-group-dialog.component';

describe('CreateQuestionGroupDialogComponent', () => {
  let component: CreateQuestionGroupDialogComponent;
  let fixture: ComponentFixture<CreateQuestionGroupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateQuestionGroupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateQuestionGroupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
