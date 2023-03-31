import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionnaireFillerComponent } from './questionnaire-filler.component';

describe('QuestionnaireFillerComponent', () => {
  let component: QuestionnaireFillerComponent;
  let fixture: ComponentFixture<QuestionnaireFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuestionnaireFillerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionnaireFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
