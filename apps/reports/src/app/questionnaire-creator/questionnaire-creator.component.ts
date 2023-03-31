import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {Project, Question} from '@consider/interfaces';

@Component({
  selector: 'app-questionnaire-creator',
  templateUrl: './questionnaire-creator.component.html',
  styleUrls: ['./questionnaire-creator.component.css'],
})
export class QuestionnaireCreatorComponent implements OnInit {
  questionnaireForm: FormGroup;
  projects: Project[] = []; 
  existingQuestionsList: Question[] = []
  showAddQuestionForm = false;

  constructor(private fb: FormBuilder) {
    this.questionnaireForm = this.fb.group({
      name: [''],
      project_id: [''],
      questions: this.fb.array([]),
    });
  }

  ngOnInit(): void {}

  get questions() {
    return this.questionnaireForm.get('questions') as FormArray;
  }


  addQuestion(type: 'existing' | 'new') {
    if (type === 'existing') {
      this.questions.push(
        this.fb.group({
          type: ['existing'],
          question_id: [''],
        })
      );
    } else {
      this.questions.push(
        this.fb.group({
          type: ['new'],
          question: [''],
          response_type: [''],
        })
      );
    }
    this.showAddQuestionForm = false
  }

  removeQuestion(index: number) {
    this.questions.removeAt(index);
  }

  onSubmit() {
    // Handle form submission here.
  }
}

