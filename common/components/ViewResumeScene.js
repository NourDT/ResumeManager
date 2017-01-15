import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import strings from '../res/strings';
import styles from './styles/allStyles';
import { SimpleCard } from './CommonComp';

/**
* View Resume is one simple card which gets currResume as body from store.
*/
class ViewResumeScene extends Component {
  renderBody() {
    return(
      <Text>{this.props.currResume}</Text>
    );
  }
  render() {
    return (
      <View style={styles.sceneBase}>
        <SimpleCard title={strings.currentResume} cardBody={this.renderBody()}/>
      </View>
    );
  }
}

ViewResumeScene.propTypes = {
  currResume: React.PropTypes.string
}

function mapStateToProps (state) {
  return {
    currResume: state.otherReducer.currResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewResumeScene);