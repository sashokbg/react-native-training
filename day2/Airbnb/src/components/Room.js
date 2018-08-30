import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/roomStyle.js';

class Room extends Component{

  printStars = () =>{
    let filledStars = [];
    let emptyStars = [];
    for(i=0; i< this.props.rating; i++){
      filledStars.push(<Text style={styles.filledStar}>★</Text>);
    }
    for(i=this.props.rating; i<5; i++){
      emptyStars.push(<Text styles={styles.emptyStar}>☆</Text>);
    }
    return filledStars.concat(emptyStars);
  }

  render(){
    return (
      <View style={styles.room}>
        <Image style={styles.image} source={{uri: this.props.image}} />
        <Text style={styles.price}>{this.props.price}</Text>
        <View style={styles.description}>
          <View style={styles.rating}> 
            <Text style={styles.name} numberOfLines={1}>{this.props.name}</Text>
            <Text style={styles.stars}>
              {this.printStars()}
              <Text style={styles.starsText}> {this.props.reviews} Reviews</Text>
            </Text>
          </View>
          <Image style={styles.userImage} source={{uri: this.props.userImage}} />
        </View>
      </View>
    );
  }

}

export default Room;
