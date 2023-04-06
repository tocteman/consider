import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Questionnaire} from '@consider/interfaces';
import {QuestionnaireService} from '@consider/shared-services';

@Component({
  selector: 'consider-questionnaire-filler',
  templateUrl: './questionnaire-filler.component.html',
  styleUrls: ['./questionnaire-filler.component.css'],
})
export class QuestionnaireFillerComponent implements OnInit {
  questionnaireForm: FormGroup ;
  questionnaire?: Questionnaire;
  uploadedFile: FormControl;
  uploadInProgress: boolean = false;
  constructor(
    private fb: FormBuilder,
    private questionnaireService: QuestionnaireService,
    private route: ActivatedRoute
  ){
    this.uploadedFile = new FormControl(null)
    this.questionnaireForm = this.fb.group({
      associatedQuestions: this.fb.array([]),
      uploadedFile: this.uploadedFile
    })
  }
  get associatedQuestions() {
    return this.questionnaireForm.get('associatedQuestions') as FormArray;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.questionnaireService.getQuestionnaire(id)
    .subscribe(q => {
        this.questionnaire = q
        if (q.questions) {
          for (let question of q.questions) {
            this.associatedQuestions.push(
              this.fb.group({
                label: [question.question],
                response_type: [question.response_type],
                answer: [question.response_type === "numeric" ? 0 : '']

              })
            )
          }
        }
      })
  }

  onFileUpload(event:any) {
    this.uploadInProgress = true
    this.uploadedFile.setValue(event)

  }
  onUrlChange(url: string | null){
    if (this.uploadedFile.value) {
      this.uploadInProgress = false
    }
  }
  onSubmit() {
    console.log(this.questionnaireForm)
  }
}

