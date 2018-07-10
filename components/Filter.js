import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const URL = 'http://www.dmi.unict.it/~calanducci/LAP2/food.json';

export default class Filter extends React.Component {
  state = {
    ingredientiIniziale: [],
    ingredientiFinale: [],
    ingrprova: [],
  };
  _renderItem = ({ item }) => (
    <View>
      <Text> {item.name} </Text>
    </View>
  );

  _keyExtractor = (item, index) => {
    item.id = index;
    return String(item.id);
  };

  ricLineare(seq, chiave) {
    let i; // indice per la scansione di seq
    let ind_elem; // indice di un elemento uguale a
    // alla chiave
    ind_elem = -1;
    for (i = 0; ind_elem == -1 && i < seq.length; i++) {
      if (seq[i] == chiave) {
        return true;
      }
    }

    console.log('ciao');
    return false;
  }


filtra() {
 let input = [1, 1, 3, 7, 7, 8, 9, 9, 9, 10];
let current = input[0];
let found = false;

for (let i = 0; i < input.length; i++) {
    if (current == input[i] && !found) {
        found = true;
    } else if (current != input[i]) {
      
        current = input[i];
        found = false;
    }
}


}

  ComponentWillMount() {
    
    fetch(URL)
      .then(response => response.json())
      .then(res => this.setState({ ingrprova: {...this.state.ingrprova,...res.data.ingredients} })); 
    console.log('ciao');

     this.state.ingrprova.map(
      ingr =>
        this.ricLineare(this.state.ingredientiFinale.name, ingr)
          ? null
          : this.setState({
              ingredientiFinale: {
                ...this.state.ingredientiFinale,
                ...{ name: ingr, check: false },
              },
            })
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.ingredientiFinale}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

const styles = StyleSheet.create({});
