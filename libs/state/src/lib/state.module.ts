import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { changeText } from './state.actions'
import { reducer } from './state.reducers';
import {StoreModule} from '@ngrx/store';

export const CHANGE_TEXT_ACTION = new InjectionToken<typeof changeText>('changeText')

const actionProvider = {
  provide: CHANGE_TEXT_ACTION,
  useValue: changeText
}

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({button: reducer})
  ],
  providers: [actionProvider],
  exports: []
})
export class StateModule {}
