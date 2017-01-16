import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import strings from '../../res/strings';
import styles from '../styles/allStyles';
import { SimpleCard, Hr } from '../CommonComp';
import { push } from '../../actions/navActions';

/**
* New resume component used in Manage Resume scene.
* Uses SimpleCard, with 3 NewResumeItem component in body
*/
class NewResumeCard extends Component {
  renderBody() {
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

NewResumeCard.propTypes = {
  push: React.PropTypes.func
}

/** Simple stateless component to render a item for new resume which looks like: Img- Text - Right Arror*/
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

NewResumeItem.propTypes = {
  imgsrc: React.PropTypes.number,
  itemText: React.PropTypes.string,
  onPressAction: React.PropTypes.func
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
)(NewResumeCard);