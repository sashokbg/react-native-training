import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../../styles/roomsStyles.js';
import Room from '../Room.js';
import axios from 'react-native-axios';


class RoomsContainer extends Component{

  state = {
    rooms: []
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

  render(){
    return(
      <View>
        <Text>ROOMS</Text>
        <FlatList 
          data={this.state.rooms}
          renderItem={({item}) => <Room name={item.title} />}
        />
      </View>
    );
  }

  componentDidMount = () =>{
    axios.get('https://airbnb-api.now.sh/api/room?city=paris')
      .then((response) => {
        alert(`Rooms: ${JSON.stringify(response)}`);
        this.setState({rooms: response.data.rooms })
      })
      .catch(function (error) {
        alert(`ERROR ! ${error}`);
      });
  }
}



export default RoomsContainer;
