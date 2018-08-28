import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ratings: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  bold: {
    color: 'white',
    fontSize: 18
  },
  normal: {
    fontSize: 12,
    color: 'white'
  },
  small: {
    fontSize: 10,
    color: 'white'
  },
  image: {
    height: 40,
    width: 40
  },
  block: {
    flex: 1,
    alignItems: 'center'
  },
});

export default styles;
