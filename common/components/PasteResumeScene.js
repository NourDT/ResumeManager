import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/allStyles';
import { BlueButton } from './CommonComp';
import strings from '../res/strings';
import { STORE_KEY } from '../res/configs';
import { onPasteResumeTextChanged, onCurrResumeChanged } from '../actions/otherActions';

class PasteResumeScene extends Component {
  storeResume(resume) {
    try {
      AsyncStorage.setItem('@MySuperStore:resume_body', resume)
      .then(() => {});
    } catch (error) {
      console.log('Storage failure: ' + error);
    }
  }

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
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        if ('success' in responseJson) {
          console.log('success...');
          this.storeResume(text);
          this.props.onCurrResumeChanged(text);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log('PasteResumeScene render');
    const isNotTextEmpty = this.props.pasteResumeText.text && this.props.pasteResumeText.text.length > 0;
    return (
      <View style={styles.sceneBase}>
        <BlueButton 
          {...this.props}
          onPressAction={ () => this.postResume(this.props.pasteResumeText.text) }
          buttonText={strings.savePasteResume}
          isEnabled={isNotTextEmpty}
        />
        <Text></Text>
        <ResumeTextInput onChangeTextAction={(text) => this.props.pasteResumeChanged(text)}/>
      </View>
    );
  }
}

class ResumeTextInput extends Component {
  render() {
    return (
      <TextInput
        style={{backgroundColor: 'white', textAlign: 'left', textAlignVertical: 'top'}}
        {...this.props}
        editable={true}
        multiline={true}
        numberOfLines={20}
        onChangeText={(text) => this.props.onChangeTextAction({text})}
        placeholder={strings.pasteResumePlaceholder}
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
    pasteResumeChanged: (text) => dispatch(onPasteResumeTextChanged(text)),
    onCurrResumeChanged: (text) => dispatch(onCurrResumeChanged(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasteResumeScene);
