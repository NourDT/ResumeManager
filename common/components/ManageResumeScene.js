import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CurrentResumeCard from './CurrentResumeComp/CurrentResume';
import NewResumeCard from './CurrentResumeComp/NewResumeCard';
import styles from './styles/allStyles';
import { Hr } from './CommonComp';

export default class ManageResumeScene extends Component {
  render() {
    return (
      <ScrollView style={styles.sceneBase}>
        <CurrentResumeCard {...this.props}/>
        <Hr/> 
        <NewResumeCard {...this.props}/>
      </ScrollView>
    );
  }
}
