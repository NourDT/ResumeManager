import { NavigationExperimental } from 'react-native';
import { PUSH_ROUTE, POP_ROUTE } from '../constants/actionTypes';
import strings from '../res/strings';

const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

const navReducer = (state, action) => {
  if (!state) {
    return {
      index: 0,
      routes: [
        { key : 'ManageResumeScene', title: strings.manageResumeTitle },
        // { key : 'PasteResumeScene', title: strings.pasteResume }
      ]
    }
  }
  switch (action.type) {
    case PUSH_ROUTE: {
      return NavigationStateUtils.push(state, action.route);
    }
    case POP_ROUTE: {
      return NavigationStateUtils.pop(state);
    }
    default:
      return state;
  }
}

export default navReducer;