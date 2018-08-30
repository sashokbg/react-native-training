import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Room extends Component{

  render(){
    return (
      <Text>{this.props.name}</Text>
    );
  }

}

export default Room;
