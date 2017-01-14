import { PASTE_RESUME_TEXT_CHANGED } from '../constants/actionTypes';

export function onPasteResumeTextChanged(text) {
  console.log('otherActions.onPasteResumeTextChanged - ' + JSON.stringify(text));
  return {
    type: PASTE_RESUME_TEXT_CHANGED,
    text
  }
}