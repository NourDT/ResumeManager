import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import strings from '../../res/strings';
import { BlueButton } from '../CommonComp';
import { push } from '../../actions/navActions';

/**
* Enabled when currResume is not empty. And opens view resume scene.
*/
class ViewResumeButton extends Component {
  isNotEmptyCurrResume() {
    return this.props.currResume && this.props.currResume.length > 0;
  }

  render() {
    return(
      <BlueButton 
        onPressAction={ () => this.props.push({ key: 'ViewResumeScene', title: 'Current Resume' }) }
        buttonText={strings.viewResume}
        isEnabled={this.isNotEmptyCurrResume()}
      />
    );
  }
}

ViewResumeButton.propTypes = {
  currResume: React.PropTypes.string,
  push: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    currResume: state.otherReducer.currResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    push: (route) => dispatch(push(route))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewResumeButton);