import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SharedServicesModule } from '@consider/shared-services'

@NgModule({
  imports: [CommonModule, SharedServicesModule],
  declarations: [BannerComponent, ProjectListComponent],
  exports: [BannerComponent, ProjectListComponent],
})
export class CommonUiModule {}
