import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/allStyles';
import strings from '../../res/strings';
import { getResumeEndPt } from '../../res/settings';
import { onCurrResumeChanged } from '../../actions/otherActions';

/**
* Snippet of message in current resume card on manage resume scene.
* Displays default message when no resume.
*/
class CurrentResumeSnippet extends Component {
  getCurrentResume() {
    this.getCurrentResumeFromServer();
  }

  /**
  * GET resume and update store state via onCurrResumeChanged
  * Successful return of fetch looks like {'resume_body':'body of resume'}
  */
  getCurrentResumeFromServer() {
    fetch(getResumeEndPt)
    .then((response) => {return response.json()})
    .then((responseJson) => {
      console.log('getCurrentResumeFromServer responseJson ' + JSON.stringify(responseJson));
      if ('resume_body' in responseJson) {
        this.props.onCurrResumeChanged(responseJson['resume_body']);
      }
    })
    .catch((error) => {
      // backend not reachable or device offline
      // could show better error message
      // could also monitor connectivty and refresh once connection available
      this.props.onCurrResumeChanged(strings.netFailure);
      console.log('getCurrentResumeFromServer fetching error' + error);
    })
  }

  isEmptyCurrResume() {
    return !this.props.currResume || this.props.currResume.length == 0;
  }

  componentDidMount() {
    if (this.isEmptyCurrResume()) {
      this.getCurrentResume();
    }
  }

  render() {
    return(
      <Text style={styles.resumeSnippet}>
        {
          this.props.currResume ? (this.props.currResume.substring(0,20) + '...') : strings.noCurrentResume
        }
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