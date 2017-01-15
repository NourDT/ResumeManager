import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/allStyles';
import strings from '../../res/strings';
import { onCurrResumeChanged } from '../../actions/otherActions';

class CurrentResumeSnippet extends Component {
  getCurrentResume() {
    this.getCurrentResumeFromServer();
  }

  /**
  * GET resume and update store state via onCurrResumeChanged
  * Successful return of fetch looks like {'resume_body':'body of resume'}
  */
  getCurrentResumeFromServer() {
    fetch('http://192.168.1.73:8000/currentresume/')
    .then((response) => {return response.json()})
    .then((responseJson) => {
      console.log('getCurrentResumeFromServer responseJson ' + JSON.stringify(responseJson));
      if ('resume_body' in responseJson) {
        this.props.onCurrResumeChanged(responseJson['resume_body']);
      }
    })
    .catch((error) => {
      console.log('getCurrentResumeFromServer fetching error' + error);
    })
  }

  isEmptyCurrResume() {
    return !this.props.currResume || this.props.currResume.length == 0;
  }

  render() {
    console.log('CurrentResumeSnippet render');
    if (this.isEmptyCurrResume()) {
      this.getCurrentResume();
    }
    return(
      <Text style={styles.resumeSnippet}>
        {this.props.currResume ? (this.props.currResume.substring(0,20) + '...') : strings.noCurrentResume}
      </Text>
    );
  }
}

function mapStateToProps (state) {
  return {
    currResume: state.otherReducer.currResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCurrResumeChanged: (text) => dispatch(onCurrResumeChanged(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentResumeSnippet);