import { PASTE_RESUME_TEXT_CHANGED, CURR_RESUME_CHANGED } from '../constants/actionTypes';
import strings from '../res/strings';

const otherReducer = (state, action) => {
  if (!state) {
    return {
      pasteResumeText: '',
      currResume: ''
    }
  }
  switch (action.type) {
    case PASTE_RESUME_TEXT_CHANGED: {
      return {...state, pasteResumeText: action.text};
    }
    case CURR_RESUME_CHANGED: {
      return {...state, currResume: action.text};
    }
    default: 
      return state;
  }
}

export default otherReducer;