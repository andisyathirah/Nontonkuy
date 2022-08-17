import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

class Details extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount() {
        this.apiCall();
    }

    apiCall = async () => {
        const url = 'https://api.themoviedb.org/4/list/1?page=1&api_key=1f1547c82e76f6cee7c307492476304e'
        const res = await fetch(url)
        const data = await res.json()
        this.setState({items: data.results})
      }

    forrender = ({item, index}) => {
      let {cardText, card, cardImage} = styles
        return (
        <View>
          <Image style={cardImage} source={{uri: 'https://image.tmdb.org/t/p/original' + item.poster_path}}></Image>
          <Text style={cardText}>Title : {item.title}</Text>
          <Text style={cardText}>Overview : {item.overview}</Text>
          <Text style={cardText}>Release Date : {item.release_date}</Text>
        </View>
       )
    }
    render() {
        let {container, loader} = styles
        let {items} = this.state
        // if (items.length === 0) {
        //   return (
        //     <View style={loader}>
        //       <ActivityIndicator size="large"/>
        //     </View>
        //   )
        // }
        return(
            <FlatList
                style={container}
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.forrender}
              />
          )
    }
    
    
}

export default Details;

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
      }
})