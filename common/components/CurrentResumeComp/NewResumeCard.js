import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import strings from '../../res/strings';
import styles from '../styles/allStyles';
import { SimpleCard } from '../CommonComp';

export default class NewResumeCard extends Component {
  renderBody() {
    return (
      <Text>
        Create a new resume by paste
      </Text>
    );
  }

  render() {
    return (
      <SimpleCard title={strings.newResumeTitle} cardBody={this.renderBody()}/>
    );
  }
}