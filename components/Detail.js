import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Switch,
  TextInput,
  Platform,
  Button,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

const TINT_COLOR = 'rgb(4, 159, 239)';

export default class Detail extends React.Component {
  state = {
    id: '',
    name: '',
    category: ' ',
    ingredients: [],
    image: '',
    price: 0,
    info: '',
    quant: 1,
  };


  componentWillMount() {
    let item = this.props.navigation.state.params.currentFood;
   
    if (item) {
      this.setState({ ...item });
    }
    this.setState({string: "Seleziona la quantità"})
  }

  render() {
    return (
      <View style={[styles.todowrapper, { padding: 1 }]}>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: 150,
              width: 150,

              borderRadius: 80,
            }}
            source={{ uri: this.state.image }}
          />
        </View>
        <Text style={styles.text}>Nome: {this.state.name}</Text>
        <Text style={styles.text}>Categoria: {this.state.category} </Text>
        <Text style={styles.text}>Info: {this.state.info}</Text>
        <Text style={styles.text}>ingredients: {this.state.ingredients}</Text>
        <Text style={styles.text}>Prezzo:{this.state.price} </Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
          <Button title="+" onPress= {() => this.setState({quant: this.state.quant+1})}/>

          <Text style={{ fontSize: 20 }}>{this.state.quant}</Text>
         <Button title="-" onPress= {() => this.setState({quant: this.state.quant==1 ? 1 : this.state.quant-1 })}/>
        </View>
        <View style={{ marginTop: 20 }}>
          <Button title= {"Paghi " + String(this.state.quant*this.state.price) + " €" } />
        </View>
      </View>
    );
  }
}

Detail.navigationOptions = ({ navigation }) => ({
  title: 'Detail',
  headerLeft: <Button title="Return" onPress={() => navigation.goBack()} />,
});

const styles = StyleSheet.create({
  wrapper: { backgroundColor: '#E9E9EF', flex: 1 },
  todowrapper: {
    marginTop: 30,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 15,
  },
});
