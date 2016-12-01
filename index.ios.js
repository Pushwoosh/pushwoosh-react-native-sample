/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter
} from 'react-native';

class PushwooshSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('PushwooshSample', () => PushwooshSample);

DeviceEventEmitter.addListener('pushOpened', (e: Event) => {
  console.warn("pushOpened: " + JSON.stringify(e));
  alert(JSON.stringify(e));
});

const Pushwoosh = require('pushwoosh-react-native-plugin');

Pushwoosh.init({ "pw_appid" : "4FC89B6D14A655.46488481" });

Pushwoosh.register(
  (token) => {
    console.warn("Registered for pushes: " + token);
    Pushwoosh.getPushToken(function(token) {
        console.warn("Push token: " + token);
    });
  },
  (error) => {
    console.warn("Failed to register: " + error);
  }
);

Pushwoosh.getHwid((hwid) => {
  console.warn("Pushwoosh hwid: " + hwid);
});

// Segmentation example
//Pushwoosh.setTags({ "testTag" : "testValue" });
//Pushwoosh.getTags(
//  (tags) => {
//    console.warn("Application tags: " + JSON.stringify(tags));
//  },
//  (error) => {
//    console.error(error);
//  }
//);

// In-App messagin example
//Pushwoosh.setUserId("%userId%");
//Pushwoosh.postEvent("applicationOpened", { "attribute" : "value" });

// Geolocation tracking example
//Pushwoosh.startLocationTracking();
//Pushwoosh.stopLocationTracking();

// Application icon badge number example
//Pushwoosh.setApplicationIconBadgeNumber(2);
//Pushwoosh.addToApplicationIconBadgeNumber(2);
//Pushwoosh.getApplicationIconBadgeNumber((badgeNumber) => {
//  console.warn("Application icon badge number = " + badgeNumber);
//});
