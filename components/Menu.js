import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
  Button,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Food from './Food';
const URL = 'http://www.dmi.unict.it/~calanducci/LAP2/food.json';

export default class Menu extends React.Component {
  state = {
    menu: [],
    backupMenu: [],
  };

  _renderItem = ({ item }) => <Food data={item} onTouch={() => this._touch(item)} />;

  _keyExtractor = item => {
    return item.id;
  };

  
  _touch = item =>
    this.props.navigation.navigate('Detail', {
      currentFood: item,
    });

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(res => this.setState({ menu: res.data, backupMenu: res.data }));
  }

  SearchFilterFunction(text) {
    const newData = this.state.menu.filter(function(item) {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    return newData;
  }

  render() {
    return (
      <View>
        <SearchBar
          onChangeText={text => text ?
            this.setState({ menu: this.SearchFilterFunction(text) })
            :  this.setState({menu: this.state.backupMenu})
          }
          //onClear={() => this.setState({menu: this.state.backupMenu})}
          placeholder="Cerca il tuo cibo preferito..."
        />
        <FlatList
          data={this.state.menu}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

Menu.navigationOptions = ({ navigation }) => {
  return {
    title: 'Menu',
    headerStyle: {
      backgroundColor: 'blue',
    },
    headerTintColor: 'white',
    
   headerRight: (
      
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Filter')}>
         
        <Ionicons
          style={{ paddingHorizontal: 15 }}
          name="ios-add-outline"
          size={34}
          color="white"
        />
      </TouchableOpacity>
    ),
    
        
  };
};
