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

  render() {
    console.log('SaveButton render');
    const isNotTextEmpty = this.props.pasteResumeText.text && this.props.pasteResumeText.text.length > 0;
    return(
      <BlueButton 
        onPressAction={ () => this.postResume(this.props.pasteResumeText.text) }
        buttonText={strings.savePasteResume}
        isEnabled={isNotTextEmpty}
      />
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