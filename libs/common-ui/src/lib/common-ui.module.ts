import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedServicesModule } from '@consider/shared-services'
import { MaterialModule } from '@consider/material'

@NgModule({
  imports: [CommonModule, SharedServicesModule, MaterialModule],
  declarations: [BannerComponent, ProjectListComponent],
  exports: [BannerComponent, ProjectListComponent],
})
export class CommonUiModule {}
