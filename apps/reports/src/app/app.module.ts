import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonUiModule } from '@consider/common-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionnaireCreatorComponent } from './questionnaire-creator/questionnaire-creator.component';
import { MaterialModule } from '@consider/material'
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireCreatorComponent,
  ],
  imports: [BrowserModule, CommonUiModule, BrowserAnimationsModule, MaterialModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
