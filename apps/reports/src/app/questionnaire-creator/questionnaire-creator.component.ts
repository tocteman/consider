import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {Project, Question} from '@consider/interfaces';
import {ProjectService, QuestionnaireService, QuestionService} from '@consider/shared-services';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-questionnaire-creator',
  templateUrl: './questionnaire-creator.component.html',
  styleUrls: ['./questionnaire-creator.component.css'],
})
export class QuestionnaireCreatorComponent implements OnInit {
  questionnaireForm: FormGroup;
  projects: Project[] = []; 
  questions: Question[] = []
  initialQuestions: Question[] = []
  existingQuestionsList: Question[] = []
  showAddQuestionForm = false;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private projectService: ProjectService,
    private questionnaireService: QuestionnaireService
  ) {
    this.questionnaireForm = this.fb.group({
      name: ['', [Validators.required]],
      project_id: ['', [Validators.required]],
      intended_for: ['', Validators.required],
      associatedQuestions: this.fb.array([]),
    })
    this.questionnaireForm.get('intended_for')?.valueChanges.subscribe(value => {
      this.questions = this.initialQuestions.filter(x => x.intended_for === value)
    })
  }

  ngOnInit(): void {
    forkJoin([
      this.projectService.getProjects(),
      this.questionService.getQuestions()
    ]).subscribe(([projects, questions]) => {
        this.projects = projects
        this.questions = questions
        this.initialQuestions = questions
      })
  }

  get associatedQuestions() {
    return this.questionnaireForm.get('associatedQuestions') as FormArray;
  }


  addQuestion(type: 'existing' | 'new') {
    if (type === 'existing') {
      this.associatedQuestions.push(
        this.fb.group({
          type: ['existing'],
          question_id: [''],
        })
      );
    } else {
      this.associatedQuestions.push(
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
    this.associatedQuestions.removeAt(index);
  }

  genQuestion(input: any, intended_for: string) {
    const { question, response_type } = input
    return {
      question,
      response_type,
      intended_for,
      created_by: 1,
      created_at: new Date(),
      updated_at: new Date()
    }


  }

  onSubmit() {
    const { intended_for, name, project_id, associatedQuestions} = this.questionnaireForm.value
    const questions = associatedQuestions.map((x:any) => (
      x.type === 'existing' ? x.question_id : this.genQuestion(x, intended_for)
    ))
    const payload = {
      name,
      project_id,
      created_by: 1,
      created_at: Date.now(),
      updated_at: Date.now(),
      questions
    }
    this.questionnaireService.createQuestionnaire(payload)
    .subscribe( res => console.log({res}))

  }
}

