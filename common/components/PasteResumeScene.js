import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles/allStyles';
import { BlueButton } from './CommonComp';
import strings from '../res/strings';
import { onPasteResumeTextChanged } from '../actions/otherActions';

class PasteResumeScene extends Component {
  render() {
    console.log('PasteResumeScene render ' + JSON.stringify(this.props.pasteResumeText));
    const isNotTextEmpty = this.props.pasteResumeText.text && this.props.pasteResumeText.text.length > 0;
    return (
      <View style={styles.sceneBase}>
        <BlueButton 
          {...this.props}
          onPressAction={ () => this.props.push({ key: 'ViewResumeScene', title: this.props.pasteResumeText.text }) }
          buttonText={strings.savePasteResume}
          isEnabled={isNotTextEmpty}
        />
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
    pasteResumeChanged: (text) => dispatch(onPasteResumeTextChanged(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasteResumeScene);
