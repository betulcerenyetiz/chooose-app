import * as constants from '../constants';

const initialState = {
  defaultParameter: false,
  email: 'ceren@gmail.com',
  password: 'ceren123',

  userInfo: {},

  loginStatus: false,
  loginLoading: false,
};

const app = (state = initialState, actionObj) => {
  switch (actionObj.type) {
    case constants.DEFAULT_ACTION: {
      return {...state, defaultParameter: actionObj.payload};
    }
    case constants.SET_APP: {
      return {...state, [actionObj.key]: actionObj.value};
    }
    case constants.REQUEST_LOGIN_USER_WITH_FB: {
      return {
        ...state,
        password: undefined,
        userInfo: actionObj.payload.userInfo,
        loginStatus: true,
      };
    }

    default:
      return state;
  }
};

export {app};
