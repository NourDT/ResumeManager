import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles/allStyles';
import strings from '../res/strings';
import { SimpleCard } from './CommonComp';

export default class ComingSoonScene extends Component {
  renderBody() {
    return (
      <Text>Stay tuned!!</Text>
    );
  }
  render() {
    return (
      <SimpleCard title={strings.comingSoon} cardBody={this.renderBody()}/>
    );
  }
}