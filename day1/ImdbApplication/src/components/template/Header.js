import React ,{Component} from 'react';
import {View, Image} from 'react-native';
import styles from '../../../styles/styles.js';

class Header extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Image style={styles.headerImage} source={require('../../../images/imdb.png')} />
      </View>
    );
  }
}

export default Header;
