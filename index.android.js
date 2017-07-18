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
  PanResponder,
  Animated,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import SortableListView from 'react-native-sortable-listview';
import getData from './modules/get-data';

let data = getData();
let order = Object.keys(data);

export default class JetspeedParkingLocator extends Component {
  constructor(props) {
    super(props);
    this.rowClickHandler = this.rowClickHandler.bind(this);
    this.state = {selected_row: null};
  }

  rowClickHandler(name) {
    let selected_row = this.state.selected_row;
    selected_row && (data[selected_row]['is_selected'] = false);
    this.setState({selected_row: name}, () => data[name]['is_selected'] = true);
  }

  render() {
    let rowClickHandler = this.rowClickHandler;
    return <SortableListView
      style={{flex: 1}}
      data={data}
      order={order}
      rowHasChanged={() => this.forceUpdate()}
      onRowMoved={e => {
        order.splice(e.to, 0, order.splice(e.from, 1)[0]);
        this.forceUpdate();
      }}
      renderRow={row => <SingleLotView data={row} row_clicker={rowClickHandler} />}
    />
  }
}

class SingleLotView extends Component {
  render () {
    let {color, name, spaces} = this.props.data;
    let style = [styles.row_style, {backgroundColor: color}];
    this.props.data.is_selected && style.push(styles.selected_row);
    return (
      <TouchableHighlight
        style={style}
        delayLongPress={500}
        underlayColor={'grey'}
        {...this.props.sortHandlers}
        onPress={() => {
          this.props.row_clicker(name);
        }}
      >
        <Text style={styles.text_style}>{`${name}: ${spaces}`}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  row_style: {
    height: 100,
    flexDirection: 'column',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  selected_row: {
    height: 200
  },
  text_style: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'monospace',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('JetspeedParkingLocator', () => JetspeedParkingLocator);
