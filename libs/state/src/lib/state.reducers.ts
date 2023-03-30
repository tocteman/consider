import { Action, createReducer, on } from '@ngrx/store'
import { changeText } from "./state.actions";

export interface ButtonState {
  text: string;
}

export const initialState: ButtonState = {
  text: 'click me!'
}

const genRandomText = () => `Button clicked! ${Math.random()}`

const buttonReducer = createReducer(
  initialState,
  on(changeText, state => ({
    ...state,
    text: genRandomText()
  }))
)

export function reducer(state: ButtonState | undefined, action: Action) {
  return buttonReducer(state, action)
}
