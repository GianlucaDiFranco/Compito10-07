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
  Image
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default class Food extends React.Component {
  render() {
    return (
      
        <TouchableHighlight underlayColor="blue" onPress={this.props.onTouch}>
          <View style={styles.row}>
           
          
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 5 }}>
            <Text style={styles.text}>{this.props.data.name} </Text> 
                
            <Text style={styles.text2}>{this.props.data.info}  </Text>        
            <Text style={[styles.text2, {color: "red"}]}>{this.props.data.price} € </Text>
            </View>
            <Image
          style={styles.image}
              source={{
                uri:
                  this.props.data.image 
              }}
            /> 
          </View>
          
        </TouchableHighlight>
            
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex:1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    //borderWidth: 1,
    //marginHorizontal: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  text: { flex: 1, fontSize: 20, marginLeft: 10 },
  text2: { flex:1,  fontSize: 15, marginLeft: 10, color: 'gray' },
    image: {
    height: 80,
    width: 80,
    borderRadius: 80,
    marginTop: 50,
  },
});
