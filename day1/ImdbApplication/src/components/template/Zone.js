
import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Zone extends Component{

  render(){
    return (
      <View>
        {this.props.children}
      </View>
    )
  }

}

export default Zone;
