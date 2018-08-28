import React, {Component} from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import styles from '../../../styles/cast.js';

export class Cast extends Component{

  render(){
    return (
      <View style={styles.zone}> 
        <Text style={styles.title}>Top Billed Cast</Text>

        <ScrollView horizontal={true}>
          <Image source={require('../../../images/star.png')} />
          <Image source={require('../../../images/star.png')} />
          <Image source={require('../../../images/star.png')} />
          <Image source={require('../../../images/star.png')} />
          <Image source={require('../../../images/star.png')} />
          <Image source={require('../../../images/star.png')} />
          <Image source={require('../../../images/star.png')} />
        </ScrollView> 
      </View>
    );
  }
}

export default Cast;
