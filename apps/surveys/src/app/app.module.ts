import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@consider/common-ui';
import { MaterialModule } from '@consider/material';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { TextChangerComponent } from './text-changer/text-changer.component';
import {reducer} from '@consider/state';
import {SharedServicesModule} from '@consider/shared-services';

@NgModule({
  declarations: [AppComponent, TextChangerComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonUiModule,
    MaterialModule,
    SharedServicesModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    StoreModule.forRoot({ button: reducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
