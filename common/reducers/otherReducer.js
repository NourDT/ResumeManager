import { PASTE_RESUME_TEXT_CHANGED } from '../constants/actionTypes';
import strings from '../res/strings';

const otherReducer = (state, action) => {
  if (!state) {
    return {
      pasteResumeText: ''
    }
  }
  switch (action.type) {
    case PASTE_RESUME_TEXT_CHANGED: {
      return {...state, pasteResumeText: action.text};
    }
    default: 
      return state;
  }
}

export default otherReducer;