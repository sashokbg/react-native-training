import React from 'react';
import {StyleSheet} from 'react-native';


export default StyleSheet.create({
  image:{
    width: '100%',
    height: 200
  },
  room:{
    paddingTop: 30,
    paddingBottom: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  description:{
    height: 100,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  name:{
    fontSize: 20,
    color: 'black',
  },
  rating:{
    flex: 3,
  },
  stars:{
    fontSize: 25
  },
  starsText:{
    fontSize: 15
  },
  filledStar:{
    color: 'orange'
  },
  emptyStar:{
  },
  price:{
    textAlign: 'center',
    fontSize: 25,
    padding: 10,
    minWidth: 80,
    opacity: 0.7,
    position: 'absolute',
    top: 170,
    backgroundColor: 'black',
    color: 'white'
  },
  userImage:{
    width: 80,
    height: 80,
    borderRadius: 90,
    flex: 1,
  },
}); 
