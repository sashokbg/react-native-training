import React, {Component} from 'react';
import {Text,View,Image,Button, TouchableOpacity} from 'react-native';
import Ratings from './Ratings'
import styles from '../../../styles/styles.js';

class Movie extends Component{

  render(){
    return (
      <View style={styles.zone}> 
        <Text style={[styles.movieTitle, {color: 'white'}]}>Interstellar</Text>
        <View style={styles.movieInfo}>
          <Text style={{color: 'white'}}>2014</Text>
          <Text style={{color: 'white'}}>PG-13</Text>
          <Text style={{color: 'white'}}>2h 49min</Text>
          <Text style={{color: 'white'}}>Adventure, Drama, Sci-Fi</Text>
        </View>
        <View style={styles.movieDescription}>
          <Image style={styles.movieDescriptionImage} source={require('../../../images/poster.jpg')} />
          <View style={styles.movieDescriptionRight}>
            <Text style={[styles.movieDescriptionText,{color: 'white'}]}>A team of explorers travel through a wormhole in space in an attempt to ensure humaty's survival.</Text>
            <TouchableOpacity style={styles.movieDescriptionButton}>
              <Text style={{color: 'white'}}>+  ADD TO WATCHLIST</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Ratings></Ratings>
      </View>
    )
  }
}

export default Movie;
