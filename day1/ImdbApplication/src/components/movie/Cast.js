import React, {Component} from 'react';
import {Text,View,Image,ScrollView} from 'react-native';
import styles from '../../../styles/cast.js';

export class Cast extends Component{

  render(){
    return (
      <View style={styles.zone}> 
        <Text style={styles.title}>Top Billed Cast</Text>

        <ScrollView horizontal={true}>
          <Image style={styles.image} source={require('../../../images/cast1.jpg')} />
          <Image style={styles.image} source={require('../../../images/cast2.jpg')} />
          <Image style={styles.image} source={require('../../../images/cast3.jpg')} />
          <Image style={styles.image} source={require('../../../images/cast4.jpg')} />
          <Image style={styles.image} source={require('../../../images/cast5.jpg')} />
        </ScrollView> 
      </View>
    );
  }
}

export default Cast;
