import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { connect } from 'react-redux';

import SaveButton from './PasteResumeSceneComp/SaveButton';
import styles from './styles/allStyles';
import strings from '../res/strings';
import { onPasteResumeTextChanged } from '../actions/otherActions';

/** 
* Text input for pasting resume. When text changes store is updated and here Save button listens.
*/
class PasteResumeScene extends Component {
  renderResumeTextInput(props) {
    this.props.pasteResumeChanged('');
    return (
      <TextInput
        style={styles.pasteResumeTextInput}
        editable={true}
        multiline={true}
        numberOfLines={20}
        onChangeText={(text) => this.props.pasteResumeChanged({text})}
        placeholder={strings.pasteResumePlaceholder}
      />
    );
  }

  render() {
    return (
      <View style={styles.sceneBase}>
        {this.renderResumeTextInput()}
      </View>
    );
  }
}

PasteResumeScene.propTypes = {
  pasteResumeChanged: React.PropTypes.func
}

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pasteResumeChanged: (text) => dispatch(onPasteResumeTextChanged(text)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasteResumeScene);
