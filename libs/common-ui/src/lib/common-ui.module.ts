import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedServicesModule } from '@consider/shared-services';
import { MaterialModule } from '@consider/material';
import { LoginFormComponent } from './login-form/login-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [CommonModule, SharedServicesModule, MaterialModule, ReactiveFormsModule],
  declarations: [BannerComponent, ProjectListComponent, LoginFormComponent],
  exports: [BannerComponent, ProjectListComponent],
})
export class CommonUiModule {}
