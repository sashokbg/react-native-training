import React, {Component} from 'react';
import {TouchableHighlight ,View, Text, TextInput, Image} from 'react-native';
import styles from '../../styles/loginStyles.js';
import axios from 'react-native-axios';

class LoginContainer extends Component{

  state = {
    email: 'arno@airbnb-api.com',
    password: 'password01'
  }

  static navigationOptions = {
    header: null,
    title: 'Login'
  }

  loginHandler = () => {
    axios.post('https://airbnb-api.now.sh/api/user/log_in', {email: this.state.email, password: this.state.password}, { headers: { 'Content-Type': 'application/json'}})
      .then((response) => {
        if(response.data.token){
          //alert(`Welcome ! ${JSON.stringify(response)}`);
          this.props.navigation.navigate('Rooms');
        }
      })
      .catch(function (error) {
        alert(`ERROR ! ${error}`);
      });
  }

  render(){
    return(
      <View style={styles.page}>
        <Image 
          style={styles.image}
          source={require('../../images/logo.png')}/>
        <Text style={styles.title}>Welcome</Text>
        <TextInput
          style={styles.login} 
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder='Login'
          placeholderTextColor='white'
          />
        <TextInput
          secureTextEntry={true}
          style={styles.login} 
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          placeholder='Password'
          placeholderTextColor='white'
          />
        <TouchableHighlight 
          style={styles.button}
          onPress={this.loginHandler}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default LoginContainer;
