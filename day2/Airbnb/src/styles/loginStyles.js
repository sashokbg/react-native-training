import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image:{
    width: 150,
    height: 150
  },
  login:{
    color: 'white',
    height: 44,
    width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginTop: 25,
    paddingHorizontal: 20,
    fontSize: 20
  },
  title: {
    marginTop: 30,
    color: 'white',
    fontSize: 40
  },
  page:{
    backgroundColor: '#ff5a5f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 40,
    width: 160,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 30,
    color: '#ff5a5f'
  },
});

export default styles;
