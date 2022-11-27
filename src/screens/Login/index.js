import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {loginUserWithFB, setApp} from '../../redux/actions';

import styles from './styles';

const mapStateToProps = states => ({app: states.app});

const mapDispatchToProps = dispatch => ({dispatch});

const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {dispatch, app} = props;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image
          source={require('../../assets/chooose.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder="e-mail"
          keyboardType="email-address"
          onChangeText={d => dispatch(setApp('email', d))}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          onChangeText={d => dispatch(setApp('password', d))}
        />
        <TouchableOpacity 
          onPress={() => dispatch(loginUserWithFB())}
          style={styles.button}
          >
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Text>Hesabınız yok mu?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export {LoginPage};
