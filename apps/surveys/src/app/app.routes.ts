import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireFillerComponent } from './questionnaire-filler/questionnaire-filler.component';

const routes: Routes = [
  { path: '', redirectTo: '/questionnaires', pathMatch: 'full'},
  { path: 'questionnaires/:id', component: QuestionnaireFillerComponent },
  { path: 'questionnaires', component: QuestionnaireListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
