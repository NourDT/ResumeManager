import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import strings from '../../res/strings';
import styles from '../styles/allStyles';
import { BlueButton } from '../CommonComp';

// strings.setLanguage('it');

export default class CurrentResumeCard extends Component {
  renderViewResumeButton(props) {
    return (
      <BlueButton 
          {...props}
          onPressAction={ () => props.push({ key: 'ViewResumeScene', title: 'Current _ Resume' }) }
          buttonText={strings.viewResume}
      />
    );
  }
  
  render() {
    return (
      <View style={styles.cardBase}>
        <CurrentResumeBody />
        {this.renderViewResumeButton(this.props)}
      </View>
    );
  }
}

class CurrentResumeBody extends Component {
  render() {
    return (
      <View style={styles.cardBody}>
        <Text style={styles.cardTitleFont}>
          {strings.currentResume}
        </Text>
        <Text style={styles.cardBodyFont}>
          {strings.noCurrentResume}
        </Text>
      </View>
    );
  }
}

