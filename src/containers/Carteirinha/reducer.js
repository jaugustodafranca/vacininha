const initialState = {
  isSessionActive: null,
  sectorList: [],
  sitesList: null,
  updateTime: null,
  targets: [],
  loggedUser: null,
  userPermissions: null,
  enterpriseInfo: [],
  measureDatas: []
};

export default (state = initialState, action = {}) => {

  switch (action.type) {
  case 'APP_SET_USER':
    state = Object.assign({}, state, {
      isSessionActive: true,
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
  default:
    break;
  }
  return state;
};
