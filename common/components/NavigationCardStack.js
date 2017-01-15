import React, { Component, PropTypes } from 'react';
import { View, Text, NavigationExperimental } from 'react-native';

import ManageResumeScene from './ManageResumeScene';
import ViewResumeScene from './ViewResumeScene';
import ComingSoonScene from './ComingSoonScene';
import PasteResumeScene from './PasteResumeScene';
import SaveButton from './PasteResumeSceneComp/SaveButton';

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
        renderRightComponent={this._renderRightComponent}
      />
    );
  }

  _back = () => {
    this.props.pop()
  }

  /**
  * Only one scene has the Save button on the right
  */  
  _renderRightComponent = (props) => {
    switch(props.scene.route.key) {
      case 'PasteResumeScene':
        return(<SaveButton/>);
    }
  }

  _renderTitleComponent = (props) => {
    return(
      <NavigationHeader.Title>
        {props.scene.route.title}
      </NavigationHeader.Title>
    );
  }
}

Header.propTypes = {
  pop: React.PropTypes.func,
  scene: React.PropTypes.object,
}

class NavigationCardStackBase extends Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'ManageResumeScene':
        return <ManageResumeScene/>;
      case 'ViewResumeScene':
        return <ViewResumeScene/>;
      case 'PasteResumeScene':
        return <PasteResumeScene/>;
      case 'ComingSoonScene':
        return <ComingSoonScene/>;
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
    return (
      <NavigationCardStack
        renderHeader={this._renderHeader}
        navigationState={this.props.navState}
        renderScene={this._renderScene} 
      />
    );
  }
}

NavigationCardStackBase.propTypes = {
  navState: React.PropTypes.object, // could check further
  pop: React.PropTypes.func,
  push: React.PropTypes.func
}

export default NavigationCardStackBase;