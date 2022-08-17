import { StyleSheet, Text, View,
    TouchableOpacity, Image, FlatList, ActivityIndicator, Alert} from 'react-native'
import React, { PureComponent }from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
  
  
  export default class Home extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        items: [ ]
  
      }
    }
  
    componentDidMount() {
      this.getDataFromAPI()
    }
  
    getDataFromAPI = async () => {
      const endpoint = 'https://api.themoviedb.org/4/list/1?page=1&api_key=1f1547c82e76f6cee7c307492476304e'
      const res = await fetch(endpoint)
      const data = await res.json()
      this.setState({items: data.results})
    }
  
    _renderItem = ({item, index}) => {
      let {cardText, card, cardImage} = styles
      return (
      <TouchableOpacity style={card} onPress={() => this.props.navigation.navigate('Details')}>
        <Image style={cardImage} source={{uri: 'https://image.tmdb.org/t/p/original' + item.poster_path}}></Image>
        <Text style={cardText}>{item.title}</Text>
      </TouchableOpacity>
      )
    }
    render() {
      let {container, loader} = styles
      let {items} = this.state
      if (items.length === 0) {
        return (
          <View style={loader}>
            <ActivityIndicator size="large"/>
          </View>
        )
      }
      return(
        <FlatList
            style={container}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={this._renderItem}
          />
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 40
    },
  
    cardText: {
      fontSize: 16,
      padding: 10
    },
  
    card: {
      backgroundColor: '#fff',
      marginBottom: 10,
      marginLeft: '2%',
      width: '96%',
      shadowColor: '#000',
      shadowOpacity: 1,
      shadowOffset: {
        width: 3,
        height: 3
      }
    },
  
    cardImage: {
      width: '100%',
      height: 200,
      resizeMode: 'cover'
    },
  
    loader: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }
  
  })