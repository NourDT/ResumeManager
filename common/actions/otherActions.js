import { PASTE_RESUME_TEXT_CHANGED, CURR_RESUME_CHANGED } from '../constants/actionTypes';

export function onPasteResumeTextChanged(text) {
  return {
    type: PASTE_RESUME_TEXT_CHANGED,
    text
  }
}

export function onCurrResumeChanged(text) {
  return {
    type: CURR_RESUME_CHANGED,
    text
  }
}