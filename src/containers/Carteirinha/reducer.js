const initialState = {
  isSessionActive: null, 
  loggedUser: null, 
  currentUser: null,
  carteirinhasData: [],
  measureDatas: [],
  vaccinesData: [],
  currentUserId: null,
};

export default (state = initialState, action = {}) => {

  switch (action.type) {
  case 'SET_CURRENT_USER':
    state = Object.assign({}, state, { 
      currentUser: action.payload
    });
    break;
  case 'APP_SET_USER':
    state = Object.assign({}, state, { 
      loggedUser: action.payload
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
  case 'MEASURE_DATAS':
    state = Object.assign({}, state, {
      measureDatas: action.payload
    });
    break;  
  case 'CARTEIRAS_DATA':
    state = Object.assign({}, state, { 
      carteirinhasData: action.payload
    });
    break;
  case 'VACCINES_DATA':
    state = Object.assign({}, state, { 
      vaccinesData: action.payload
    });
    break;
  case 'CURRENT_USER_ID':
    state = Object.assign({}, state, { 
      currentUserId: action.payload
    });
    console.log(state,'state')
    break;
    
    case 'MEASURE_UPDATE_DATAS':
     console.log(state);
      break;  
  default:
    break;
  }
  return state;
};
