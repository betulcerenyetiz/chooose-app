import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {LoginStack} from './stacks/loginStack';
import {HomeStack} from './stacks/homeStack';
import {connect} from 'react-redux';

const Navigation = connect(
  ({app}) => ({app}),
  undefined,
)(props => {
  return useMemo(
    () => (
      <NavigationContainer>
        {props.app.loginStatus ? <HomeStack /> : <LoginStack />}
      </NavigationContainer>
    ),
    [props.app.loginStatus],
  );
});
export {Navigation};
