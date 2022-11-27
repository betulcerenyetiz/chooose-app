import * as constants from '../constants';

import * as auth from '../../api/auth';

export const defaultAction = payload => {
  return {
    type: constants.DEFAULT_ACTION,
    payload,
  };
};
export const setApp = (key, value) => ({type: constants.SET_APP, key, value});

export const loginUserWithFB = payload => async (dispatch, getState) => {
  //async işlemlerin yapılacağı yer
  const {email, password} = getState().app;

  dispatch({type: constants.SET_APP, key: 'loginLoading', value: true});

  const {data, status, success} = await auth.loginUserWithFB(
    email,
    password,
  );
  dispatch({type: constants.SET_APP, key: 'loginLoading', value: false});

  if (success) {
    dispatch({
      type: constants.REQUEST_LOGIN_USER_WITH_FB,
      payload: {},
    });
  } else {
  }
};
export const createUserWithFB = payload => async (dispatch, getState) => {
  //async işlemlerin yapılacağı yer
  const {email, username, password} = getState().app;

  dispatch({type: constants.SET_APP, key: 'loginLoading', value: true});

  const {data, status, success} = await auth.createUserWithFB(
    email,
    username,
    password,
  );

  dispatch({type: constants.SET_APP, key: 'loginLoading', value: false});

  if (success) {
    dispatch({
      type: constants.REQUEST_CREATE_USER_WITH_FB,
      payload: {},
    });
  } else {
  }
};
export const requestAllProducts = payload => async (dispatch, getState) => {
  const {data, status, success} = await products.getAllProducts();

  if (success) {
    dispatch({
      type: constants.REQUEST_GET_ALL_PRODUCTS,
      payload: {},
    });
  } else {
  }
};
