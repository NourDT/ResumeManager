import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import strings from '../../res/strings';
import styles from '../styles/allStyles';
import { BlueButton, SimpleCard } from '../CommonComp';

import { onCurrResumeChanged } from '../../actions/otherActions';
import { push } from '../../actions/navActions';

// strings.setLanguage('it');

class CurrentResumeCard extends Component {
  getCurrentResume() {
    this.getCurrentResumeFromServer();
  }

  /**
  * GET resume and update state
  */
  getCurrentResumeFromServer() {
    fetch('http://192.168.1.73:8000/currentresume/')
    .then((response) => {return response.json()})
    .then((responseJson) => {
      console.log('getCurrentResumeFromServer responseJson ' + JSON.stringify(responseJson));
      if ('resume_body' in responseJson) {
        this.props.onCurrResumeChanged(responseJson['resume_body']);
      }
    })
    .catch((error) => {
      console.log('getCurrentResumeFromServer fetching error' + error);
    })
  }

  isNotEmptyCurrResume() {
    return this.props.currResume && this.props.currResume.length > 0;
  }

  renderViewResumeButton() {
    return (
      <BlueButton 
        {...this.props}
        onPressAction={ () => this.props.push({ key: 'ViewResumeScene', title: 'Current Resume' }) }
        buttonText={strings.viewResume}
        isEnabled={this.isNotEmptyCurrResume()}
      />
    );
  }

  renderBody() {
    console.log('CurrentResumeCard render ' + this.props.currResume);
    if (!this.isNotEmptyCurrResume()) {
      this.getCurrentResume();
    }
    return (
      <View>
        <Text>
          {this.props.currResume ? (this.props.currResume.substring(0,20) + '...') : strings.noCurrentResume}
        </Text>
        {this.renderViewResumeButton()}
      </View>
    );
  }

  render() {
    return (
      <SimpleCard title={strings.currentResume} cardBody={this.renderBody()}/>
    );
  }
}

function mapStateToProps (state) {
  return {
    currResume: state.otherReducer.currResume
  };
}

function mapDispatchToProps(dispatch) {
  return {
    push: (route) => dispatch(push(route)),
    onCurrResumeChanged: (text) => dispatch(onCurrResumeChanged(text))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentResumeCard);
