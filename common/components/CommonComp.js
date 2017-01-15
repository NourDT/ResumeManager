/**
* Multiple common stateless components
*/
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from './styles/allStyles';

/**
* Text view which takes props isEnabled, buttonText and onPressAction
* See ViewResumeButton for example
*/
export class BlueButton extends Component {
  disabledButStyle = () => {
    return this.props.isEnabled ? {} : {backgroundColor: 'gray'};
  }
  disabledButOnPress = () => {
    return this.props.isEnabled ? this.props.onPressAction : () => {};
  }
  render() {
    return (
      <Text 
        style={[styles.textButtonBlue, this.disabledButStyle()]}
        onPress={this.disabledButOnPress()}
      >
        {this.props.buttonText}
      </Text>
    );
  }
}

BlueButton.propTypes = {
  isEnabled: React.PropTypes.bool,
  onPressAction: React.PropTypes.func,
  buttonText: React.PropTypes.string
}

/**
* Simple horizontal line or could use other npm packages like react-native-hr
*/
export class Hr extends Component {
    render() {
    return (
      <View style={styles.hrLine} />
    );
  }
}

/**
* Card component, takes props title and cardBody
*/
export class SimpleCard extends Component {
  renderTitle = () => {
    return (
      <Text style={styles.cardTitle}>
        {this.props.title}
      </Text>
    );
  }
  renderBody = () => {
    return (
      <View>
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

SimpleCard.propTypes = {
  cardBody: React.PropTypes.object,
  title: React.PropTypes.string
}