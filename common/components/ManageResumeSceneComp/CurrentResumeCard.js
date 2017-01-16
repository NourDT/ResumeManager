import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ViewResumeButton from './ViewResumeButton';
import CurrentResumeSnippet from './CurrentResumeSnippet';
import { SimpleCard } from '../CommonComp';
import strings from '../../res/strings';

/**
* Current resume component used in Manage Resume scene
* Shows a snippet of current resume string or no resume or error message in CurrentResumeSnippet
* ViewResumeButton opens scene with the whole current resume.
*/
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