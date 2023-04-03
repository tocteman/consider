import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from './project.service';
import { ApiService } from './api.service';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {QuestionnaireService} from './questionnaire.service';
import {QuestionService} from './question.service';

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'connect.sid'
    })
  ],
  providers: [
    ApiService,
    ProjectService,
    QuestionService,
    QuestionnaireService
  ],
  exports: [
    HttpClientModule,
  ]
})
export class SharedServicesModule {}
