import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles/allStyles';

export default class ViewResumeScene extends Component {
  render() {
    return (
      <View>
        <Text style={styles.cardTitleFont}>View Resume</Text>
      </View>
    );
  }
}