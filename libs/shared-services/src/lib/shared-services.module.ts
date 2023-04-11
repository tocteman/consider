import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from './project.service';
import { ApiService } from './api.service';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {QuestionnaireService} from './questionnaire.service';
import {QuestionService} from './question.service';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {StorageService} from './storage.service';
import { sharedEnvironment } from '@consider/shared-environments'

@NgModule({
  imports: [
    CommonModule, 
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'connect.sid'
    }),
    AngularFireModule.initializeApp(sharedEnvironment.firebase),
    AngularFireStorageModule
  ],
  providers: [
    ApiService,
    ProjectService,
    QuestionService,
    QuestionnaireService,
    StorageService
  ],
  exports: [
    HttpClientModule,
  ]
})
export class SharedServicesModule {}
