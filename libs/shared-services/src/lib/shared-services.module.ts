import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from './project.service';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';
import {QuestionnaireService} from './questionnaire.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    ApiService,
    ProjectService,
    QuestionnaireService
  ],
  exports: [
    HttpClientModule,
  ]
})
export class SharedServicesModule {}
