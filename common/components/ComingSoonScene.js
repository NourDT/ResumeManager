import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles/allStyles';
import strings from '../res/strings';
import { SimpleCard } from './CommonComp';

/** Component to just show coming soon text for other new resume options */
export default class ComingSoonScene extends Component {
  renderBody() {
    return (
      <Text>Stay tuned!!</Text>
    );
  }
  render() {
    return (
      <View style={styles.sceneBase}>
        <SimpleCard title={strings.comingSoon} cardBody={this.renderBody()}/>
      </View>
    );
  }
}