import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import LoginContainer from './containers/LoginContainer.js';
import RoomsContainer from './containers/RoomsContainer.js';

export default createStackNavigator({
  Login: {
    screen: LoginContainer
  },
  Rooms: {
    screen: RoomsContainer
  },
});

