import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import strings from '../../res/strings';
import styles from '../styles/allStyles';
import { BlueButton, SimpleCard } from '../CommonComp';

// strings.setLanguage('it');

export default class CurrentResumeCard extends Component {
  renderViewResumeButton() {
    return (
      <BlueButton 
        {...this.props}
        onPressAction={ () => this.props.push({ key: 'ViewResumeScene', title: 'Current _ Resume' }) }
        buttonText={strings.viewResume}
      />
    );
  }

  renderBody() {
    return (
      <View>
        <Text>
          {strings.noCurrentResume}
        </Text>
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
