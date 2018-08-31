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

  renderRoom(room){
    return(
      <Room name={room.title} image={room.photos[0]} userImage={room.user.account.photos[0]} reviews={room.reviews} rating={room.ratingValue} price={room.price} />
    );
  }

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
          renderItem={({item}) => this.renderRoom(item)}
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
