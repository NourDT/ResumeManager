import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import CurrentResumeCard from './ManageResumeSceneComp/CurrentResumeCard';
import NewResumeCard from './ManageResumeSceneComp/NewResumeCard';
import styles from './styles/allStyles';
import { Hr } from './CommonComp';

/**
* Has CurrentResumeCard and NewResumeCard seperated by Hr
*/
class ManageResumeScene extends Component {
  render() {
    return (
      <ScrollView style={styles.sceneBase}>
        <CurrentResumeCard/>
        <Hr/>
        <NewResumeCard/>
      </ScrollView>
    );
  }
}

export default ManageResumeScene;