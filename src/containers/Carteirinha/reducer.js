const initialState = {
  isSessionActive: null, 
  loggedUser: null, 
  currentUser: null,
  carteirinhasData: []
};

export default (state = initialState, action = {}) => {

  switch (action.type) {
  case 'SET_CURRENT_USER':
    state = Object.assign({}, state, { 
      currentUser: action.payload
    });
    break;
  case 'APP_DESTROY_SESSION':
    state = Object.assign({}, state, {
      isSessionActive: false,
      loggedUser: null
    });
    break;
  case 'LOGIN_SIGN_OUT':
    state = initialState;
    break;
  case 'CARTEIRAS_DATA':
    state = Object.assign({}, state, { 
      carteirinhasData: action.payload
    });
    break;
  default:
    break;
  }
  return state;
};
