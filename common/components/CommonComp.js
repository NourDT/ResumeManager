import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles/allStyles';

export class BlueButton extends Component {
  disabledButStyle = () => {
    return this.props.isEnabled ? {} : {backgroundColor: 'gray'};
  }
  render() {
    return (
      <Text 
        style={[styles.textButtonBlue, this.disabledButStyle()]}
        onPress={this.props.onPressAction}
      >
        {this.props.buttonText}
      </Text>
    );
  }
}

export class Hr extends Component {
  // simple horizontal line or could use other npm packages like react-native-hr
  render() {
    return (
      <View style={styles.hrLine} />
    );
  }
}

export class SimpleCard extends Component {
  renderTitle() {
    return (
      <Text style={styles.cardTitle}>
        {this.props.title}
      </Text>
    );
  }
  renderBody() {
    return (
      <View style={styles.cardBody}>
        {this.props.cardBody}
      </View>
    );
  }
  render() {
    return (
      <View style={styles.cardBase}>
        {this.renderTitle()}
        {this.renderBody()}
      </View>
    );
  }
}