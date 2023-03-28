import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiModule } from '@consider/common-ui'
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonUiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
