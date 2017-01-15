import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/allStyles';
import { BlueButton } from '../CommonComp';
import strings from '../../res/strings';
import { saveResumeEndPt } from '../../res/settings';
import { onCurrResumeChanged } from '../../actions/otherActions';

/**
* Save button is
* gray/disabled when pasteResumeText is empty,
* blue/enabled otherwise
*/
class SaveButton extends Component {
  postResume(text) {
    console.log('posting...');
    return fetch(saveResumeEndPt, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          resume_body: text
        })
      })
      .then((response) => {return response.json()})
      .then((responseJson) => {
        if ('success' in responseJson) {
          console.log('success...');
          this.props.onCurrResumeChanged(text);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  isNotTextEmpty() {
    return this.props.pasteResumeText && this.props.pasteResumeText.length > 0;
  }

  disabledButStyle() {
    return this.isNotTextEmpty() ? {} : {color: 'gray'};
  }

  disabledButOnPress() {
    return this.isNotTextEmpty() ? () => this.postResume(this.props.pasteResumeText) : () => {};
  }

  render() {
    return(
      <Text 
        style={[styles.saveButton, this.disabledButStyle()]}
        onPress={this.disabledButOnPress()}
      >
        {strings.savePasteResume}
      </Text>
    );
  }
}

SaveButton.propTypes = {
  pasteResumeText: React.PropTypes.string,
  onCurrResumeChanged: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
    pasteResumeText: state.otherReducer.pasteResumeText.text,
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
)(SaveButton);