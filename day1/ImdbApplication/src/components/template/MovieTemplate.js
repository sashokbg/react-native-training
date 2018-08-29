import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import Zone from './Zone';
import Header from './Header';
import Movie from '../movie/Movie';
import Cast from '../movie/Cast';
import styles from '../../../styles/styles.js';

class MovieTemplate extends Component{
 
  render(){
    return (
      <ScrollView style={styles.movieTemplate}>
        <Zone>
          <Header />
        </Zone>
        <Zone>
          <Movie></Movie>
        </Zone>
        <Zone style={styles.zone}>
          <Cast></Cast>
        </Zone>
      </ScrollView>
    )
  } 

}

export default MovieTemplate;
