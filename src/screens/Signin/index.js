import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import {createUserWithFB, setApp} from '../../redux/actions';
import styles from './styles';

const mapStateToProps = states => ({app: states.app});

const mapDispatchToProps = dispatch => ({dispatch});

const SigninPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const {dispatch, app} = props;

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
          onChangeText={d => dispatch(setApp('email', d))}
        />
        <TextInput
          style={styles.input}
          placeholder="name"
          onChangeText={d => dispatch(setApp('username', d))}
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={d => dispatch(setApp('password', d))}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(createUserWithFB())}>
          <Text style={styles.buttonText}>Kayıt Ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
});

export {SigninPage};
