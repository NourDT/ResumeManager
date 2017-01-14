import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';
import ManageResumeScene from './ManageResumeScene';
import ViewResumeScene from './ViewResumeScene';
import ComingSoonScene from './ComingSoonScene';
import PasteResumeScene from './PasteResumeScene';

const {
  CardStack: NavigationCardStack,
  Header: NavigationHeader,
} = NavigationExperimental;

class Header extends Component {
  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
        onNavigateBack={this._back}
      />
    );
  }

  _back = () => {
    this.props.pop()
  }

  _renderTitleComponent = (props) => {
    return (
      <NavigationHeader.Title>
        {props.scene.route.title}
      </NavigationHeader.Title>
    );
  }
}

class NavigationCardStackBase extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'ManageResumeScene':
        return <ManageResumeScene {...this.props}/>; // only pass push and pop??
      case 'ViewResumeScene':
        return <ViewResumeScene {...this.props}/>;
      case 'PasteResumeScene':
        return <PasteResumeScene {...this.props}/>;
      case 'ComingSoonScene':
        return <ComingSoonScene {...this.props}/>;
    }
  }
  _renderHeader = (sceneProps) => {
    return (
      <Header
        pop={this.props.pop}
        {...sceneProps}
      />
    );
  }
  render() {
    console.log('NavigationCardStackBase render ' + JSON.stringify(this.props));
    return (
      <NavigationCardStack
        renderHeader={this._renderHeader}
        navigationState={this.props.navState}
        renderScene={this._renderScene} 
      />
    );
  }
}

export default NavigationCardStackBase;