import { Component, OnInit } from '@angular/core';
import {Questionnaire} from '@consider/interfaces';
import {QuestionnaireService} from '@consider/shared-services';

@Component({
  selector: 'consider-questionnaire-list',
  templateUrl: './questionnaire-list.component.html',
  styleUrls: ['./questionnaire-list.component.css'],
})
export class QuestionnaireListComponent implements OnInit {
  questionnaires: Questionnaire[] = []
  constructor(
    private questionnaireService: QuestionnaireService
  ){}

  ngOnInit(): void{
    this.questionnaireService.getQuestionnaires()
    .subscribe(qs => {this.questionnaires = qs})
  }
}
