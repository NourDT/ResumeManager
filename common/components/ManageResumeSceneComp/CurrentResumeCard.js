import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ViewResumeButton from './ViewResumeButton';
import CurrentResumeSnippet from './CurrentResumeSnippet';
import { SimpleCard } from '../CommonComp';
import strings from '../../res/strings';

class CurrentResumeCard extends Component {
  renderCurrentResumeSnippet() {
    return(
      <CurrentResumeSnippet/>
    );
  }

  renderViewResumeButton() {
    return (
      <ViewResumeButton/>
    );
  }

  renderBody() {
    return (
      <View>
        {this.renderCurrentResumeSnippet()}
        {this.renderViewResumeButton()}
      </View>
    );
  }

  render() {
    return (
      <SimpleCard title={strings.currentResume} cardBody={this.renderBody()}/>
    );
  }
}

export default CurrentResumeCard;