import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#393939'
  },

  headerImage: {
    width: 80, height: 30, marginVertical: 20
  },

  movieTitle: {
    fontSize: 30
  },

  movieInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%'
  },

  movieDescription: {
    marginTop: 20,
    flexDirection: 'row',
  },

  movieDescriptionImage: {
    width: 100,
    height: 150
  },

  movieDescriptionText: {
  },

  movieDescriptionButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#4965fb',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  movieDescriptionRight: {
    flex: 1,
    paddingLeft: 15
  },


  zone: {
    backgroundColor: '#212121',
    marginTop: 20,
    padding: 15
  },

  movieTemplate: {
    flex: 1,
    backgroundColor: '#191919'
  },

});

export default styles;
