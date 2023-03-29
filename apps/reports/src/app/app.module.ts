import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonUiModule } from '@consider/common-ui';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonUiModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
