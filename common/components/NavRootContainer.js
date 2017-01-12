import { connect } from 'react-redux';
import NavigationCardStack from './NavigationCardStack';
import { push, pop } from '../actions/navActions';

function mapStateToProps (state) {
  return {
    navState: state.navState,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    pop: () => dispatch(pop()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationCardStack);