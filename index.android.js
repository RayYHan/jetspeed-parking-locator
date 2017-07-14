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

export default class JetspeedParkingLocator extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        color: 'blue',
        name: 'Lot 10',
        spaces: 20
      },
      {
        color: 'blue',
        name: 'Structure',
        spaces: 17
      },
      {
        color: 'red',
        name: 'West',
        spaces: 3
      },
      {
        color: 'yellow',
        name: 'hill',
        spaces: 100
      },
      {
        color: 'green',
        name: 'underground',
        spaces: 0
      }
    ];
  }
  render() {
    let views = this.data.map(lot => {
      let view_style = {
        backgroundColor: lot.color,
        flex: 0.3,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
      };
      let text_style = {
        color: 'black',
        fontSize: 30,
        fontFamily: 'monospace',
        fontWeight: 'bold'
      };
      return (
        <View style={view_style} key={lot.name}>
          <Text style={text_style} >{`${lot.name}: ${lot.spaces}`}</Text>
        </View>
      );
    })
    return (
      <View style={{flexDirection: 'column', flex: 1, padding: 20}}>
        {views}
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

AppRegistry.registerComponent('JetspeedParkingLocator', () => JetspeedParkingLocator);
