import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import styles from '../styles/allStyles';
import { BlueButton } from '../CommonComp';
import strings from '../../res/strings';
import { onCurrResumeChanged } from '../../actions/otherActions';

class SaveButton extends Component {
  postResume(text) {
    console.log('posting...');
    return fetch('http://192.168.1.73:8000/currentresume/', {
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
    return this.props.pasteResumeText.text && this.props.pasteResumeText.text.length > 0;
  }

  disabledButStyle() {
    return this.isNotTextEmpty() ? {} : {color: 'gray'};
  }
  disabledButOnPress() {
    return this.isNotTextEmpty() ? () => this.postResume(this.props.pasteResumeText.text) : () => {};
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

function mapStateToProps (state) {
  return {
    pasteResumeText: state.otherReducer.pasteResumeText,
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