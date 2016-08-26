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
  View
} from 'react-native';

class PushwooshSample extends Component {
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

var Pushwoosh = require('pushwoosh-react-native-plugin');

Pushwoosh.init({ "pw_appid" : "4FC89B6D14A655.46488481" , "project_number" : "60756016005" });

var pushHandler = (pushData) => {
  console.warn("Push data: " + JSON.stringify(pushData));
  alert(JSON.stringify(pushData));

  // A native module is supposed to invoke its callback only once so we have to register callback again after it is called
  Pushwoosh.onPushOpen(pushHandler);
}

Pushwoosh.onPushOpen(pushHandler);

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

Pushwoosh.setTags({ "testTag" : "testValue" });

Pushwoosh.getTags(
  (tags) => {
    console.warn("Application tags: " + JSON.stringify(tags));
  },
  (error) => {
    console.error(error);
  }
);

Pushwoosh.setUserId("%userId%");

Pushwoosh.postEvent("applicationOpened", { "attribute" : "value" });
