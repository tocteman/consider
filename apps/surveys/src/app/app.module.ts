import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@consider/common-ui';
import { MaterialModule } from '@consider/material';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app.routes';
import { TextChangerComponent } from './text-changer/text-changer.component';
import { reducer } from '@consider/state';
import { SharedServicesModule } from '@consider/shared-services';
import { QuestionnaireFillerComponent } from './questionnaire-filler/questionnaire-filler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TextChangerComponent,
    QuestionnaireFillerComponent,
    QuestionnaireListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonUiModule,
    MaterialModule,
    SharedServicesModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ button: reducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
