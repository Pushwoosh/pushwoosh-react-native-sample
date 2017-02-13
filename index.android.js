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

export default class PushwooshSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
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

Pushwoosh.init({ "pw_appid" : "PUSHWOOSH_APP_CODE" , "project_number" : "FCM_SENDER_ID" });

Pushwoosh.register(
  (token) => {
    console.warn("Registered for pushes: " + token);
    Pushwoosh.getPushToken(function(token) {
        console.warn("Push token: " + token);
    });
  },
  (error) => {
    console.error("Failed to register: " + error);
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


// Notification customization example
//Pushwoosh.setMultiNotificationMode(true);
//Pushwoosh.setLightScreenOnNotification(true);
//Pushwoosh.setEnableLED(true);
//Pushwoosh.setColorLED(42);
//Pushwoosh.setSoundType(1);
//Pushwoosh.setVibrateType(1);
