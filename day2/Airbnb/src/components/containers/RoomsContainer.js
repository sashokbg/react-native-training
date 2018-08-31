import React, {Component} from 'react';
import {ActivityIndicator, View, Text, FlatList} from 'react-native';
import styles from '../../styles/roomsStyles.js';
import Room from '../Room.js';
import axios from 'react-native-axios';


class RoomsContainer extends Component{

  state = {
    rooms: [],
    isLoading: true
  }

  static navigationOptions = {
    title: 'Rooms',
    headerStyle: {
      backgroundColor: '#ff5a5f',
    },
    headerTitleStyle: {
      color: 'white',
    }
  };

 _idKeyExtractor = (item, index) => item._id;

  render(){

    if(this.state.isLoading){
      return (
        <View style={styles.loading}>
           <ActivityIndicator />
        </View>
      )
    }

    return(
      <View>
        <FlatList 
          style={styles.rooms}
          keyExtractor = {this._idKeyExtractor}
          data={this.state.rooms}
          renderItem={({item}) => <Room name={item.title} image={item.photos[0]} userImage={item.user.account.photos[0]} reviews={item.reviews} rating={item.ratingValue} price={item.price} />}
        />
      </View>
    );
  }

  componentDidMount = () =>{
    axios.get('https://airbnb-api.now.sh/api/room?city=paris')
      .then((response) => {
        this.setState({
          rooms: response.data.rooms,
          isLoading: false
        })
      })
      .catch(function (error) {
        alert(`ERROR ! ${error}`);
      });
  }
}



export default RoomsContainer;
