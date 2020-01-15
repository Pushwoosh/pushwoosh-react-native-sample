/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

import InlineInAppView from './node_modules/pushwoosh-react-native-plugin/InlineInApp.js'
                              
export default class PushwooshSample extends Component {
  state = {
    inApp1Showed: false,
    inApp2Showed: false
  }

  render() {
    return (
       <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch', flex: 1}}>  
        <InlineInAppView 
          identifier = {'enable_push_notifications'} 
          onLoaded = {e => {
            this.setState({
              inApp1Showed: true
            })
          }}
          style = {{height: 120}} 
        /> 
        <InlineInAppView 
          identifier = {this.state.inApp1Showed ? 'list_header' : ''}
          onLoaded = {e => {
            this.setState({
              inApp2Showed: true
            })
          }}
          style = {{height: 250}} 
        /> 
        <InlineInAppView 
          identifier = {this.state.inApp2Showed ? 'bottom_banner' : ''}
          style = {{height: 100}} 
        /> 
      </View>
    );
  }
}

import Pushwoosh from 'pushwoosh-react-native-plugin';

AppRegistry.registerComponent('PushwooshSample', () => PushwooshSample);

Pushwoosh.init({ "pw_appid" : "DC533-F5DA4", "project_number":"PROJECT_NUMBER"});
