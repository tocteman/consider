import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { changeText } from '@consider/state'

@Component({
  selector: 'consider-text-changer',
  templateUrl: './text-changer.component.html',
  styleUrls: ['./text-changer.component.css'],
})
export class TextChangerComponent {
  text$ = this.store.select(state => state.button.text)

  constructor(
    private store: Store<{button: {text: string}}>
  ){}

  onClick() {
    this.store.dispatch(changeText())
  }
}
