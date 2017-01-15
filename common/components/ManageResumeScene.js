import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import CurrentResumeCard from './ManageResumeSceneComp/CurrentResumeCard';
import NewResumeCard from './ManageResumeSceneComp/NewResumeCard';
import styles from './styles/allStyles';
import { Hr } from './CommonComp';
import { push } from '../actions/navActions';

class ManageResumeScene extends Component {
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

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    push: (route) => dispatch(push(route))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManageResumeScene);