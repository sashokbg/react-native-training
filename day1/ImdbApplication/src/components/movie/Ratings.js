import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../../styles/ratings.js';

class Ratings extends Component {

  render(){
    return (
      <View style={styles.ratings}> 
        <View style={styles.block}>
          <Image style={styles.image} source={require('../../../images/star.png')} />
          <Text style={styles.bold}>
            8.6<Text style={styles.normal}>/10</Text>
          </Text>
          <Text style={styles.small}>
            1.1M
          </Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.image} source={require('../../../images/rate.png')} />
          <Text style={styles.bold}>
            RATE THIS
          </Text>
        </View>
        <View style={styles.block}>
          <Image style={styles.image} source={require('../../../images/metascore.png')} />
          <Text style={styles.bold}>
            Metascore
          </Text>
          <Text style={styles.small}>
            46 critic reviews
          </Text>
        </View>
      </View>
    )
  }

}

export default Ratings;
