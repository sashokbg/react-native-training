import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import LoginContainer from './containers/LoginContainer.js';
import RoomsContainer from './containers/RoomsContainer.js';

export default createStackNavigator({
  Rooms: {
    screen: RoomsContainer
  },
  Login: {
    screen: LoginContainer
  },
});

