import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Zone from './Zone';
import Header from './Header';
import Movie from '../movie/Movie';
import Cast from '../movie/Cast';
import styles from '../../../styles/styles.js';

class MovieTemplate extends Component{
 
  render(){
    return (
      <View style={styles.movieTemplate}>
        <Zone>
          <Header />
        </Zone>
        <Zone>
          <Movie></Movie>
        </Zone>
        <Zone style={styles.zone}>
          <Cast></Cast>
        </Zone>
      </View>
    )
  } 

}

export default MovieTemplate;
