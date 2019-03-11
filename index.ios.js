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
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules
} from 'react-native';

export default class PushwooshSample extends Component {
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

// Alternative way
 // const pushwooshEmitter = new NativeEventEmitter(NativeModules.Pushwoosh);
 // pushwooshEmitter.addListener('pushOpened', (e: Event) => {
 //   console.warn("pushOpened: " + JSON.stringify(e));
 //   alert(JSON.stringify(e));
 // });

const Pushwoosh = require('pushwoosh-react-native-plugin');

Pushwoosh.init({ "pw_appid" : "PUSHWOOSH_APP_CODE" });

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

// Deprecated method
// var _pushHandler = function (pushData) {
//   console.warn("pushOpened: " + JSON.stringify(pushData));
//   alert(JSON.stringify(pushData));
//   Pushwoosh.onPushOpen(_pushHandler);
// };
// Pushwoosh.onPushOpen(_pushHandler);

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
// import PushwooshGeozones from 'pushwoosh-geozones-react-native-plugin';
// PushwooshGeozones.startLocationTracking();
// PushwooshGeozones.stopLocationTracking();

// Application icon badge number example
//Pushwoosh.setApplicationIconBadgeNumber(2);
//Pushwoosh.addToApplicationIconBadgeNumber(2);
//Pushwoosh.getApplicationIconBadgeNumber((badgeNumber) => {
//  console.warn("Application icon badge number = " + badgeNumber);
//});
