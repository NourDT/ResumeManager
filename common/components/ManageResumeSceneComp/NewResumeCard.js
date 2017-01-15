import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import strings from '../../res/strings';
import styles from '../styles/allStyles';
import { SimpleCard, Hr } from '../CommonComp';

export default class NewResumeCard extends Component {
  renderBody() {
    // todo import images into objects at a common place
    // var imgSrcDir='../../res/img/';
    return (
      <View>
        <Hr/>
        <NewResumeItem
          imgsrc={require('../../res/img/addFromComp.png')}
          itemText={strings.addFromComp}
          onPressAction={
            () => this.props.push({ key: 'ComingSoonScene', title: strings.addFromComp })
          }
        />
        <Hr/>
        <NewResumeItem
          imgsrc={require('../../res/img/pasteResume.png')}
          itemText={strings.pasteResume}
          onPressAction={
            () => this.props.push({ key: 'PasteResumeScene', title: strings.pasteResume })
          }
        />
        <Hr/>
        <NewResumeItem
          imgsrc={require('../../res/img/createNewResume.png')}
          itemText={strings.createNewResume}
          onPressAction={
            () => this.props.push({ key: 'ComingSoonScene', title: strings.createNewResume })
          }
        />
      </View>
    ); 
  }

  render() {
    return (
      <SimpleCard title={strings.newResumeTitle} cardBody={this.renderBody()}/>
    );
  }
}

class NewResumeItem extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={{width: 40, alignItems: 'center'}}>
          <Image source={this.props.imgsrc}/>
        </View>
        <Text style={{ flex: 10 }} onPress={this.props.onPressAction}>
          {this.props.itemText}
        </Text>
        <Text style={{ flex: 1 }}>
          >
        </Text>
      </View>
    );
  }
}