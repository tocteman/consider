import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionnaireListComponent } from './questionnaire-list/questionnaire-list.component';
import { QuestionnaireFillerComponent } from './questionnaire-filler/questionnaire-filler.component';
import { CookieGuard } from '@consider/shared-services';
import {LoginFormComponent} from 'libs/common-ui/src/lib/login-form/login-form.component';

const routes: Routes = [
  { path: 'login', component: LoginFormComponent},
  { path: 'questionnaires', component: QuestionnaireListComponent , },
  { path: '',  children: [
    {
      path: "",
      pathMatch: 'full',
      redirectTo: 'questionnaires'
    },
  ]},
  { path: 'questionnaires/:id', component: QuestionnaireFillerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
