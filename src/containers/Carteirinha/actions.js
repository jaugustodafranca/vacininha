import { request } from '../../core/constants';
import { queryCustomRange } from '../../utils/utils';
import { promiseWrapper, buildQuery } from '../../utils/utilsFn'; 

export const isFetchingData = (is, type) => (dispatch) => {
  dispatch({
    type: 'IS_FETCHING',
    payload: is,
    dataType: type
  });
};


export const checkLogin = () => (dispatch, store) => { 
  return promiseWrapper((resolve, reject, delay) => { 
    if (localStorage.getItem('vacininha-jwt')) {
      dispatch({ type: 'LOGIN_SUCCESS' });
      dispatch({
        type: 'APP_SET_USER',
        payload: users.filter((item) => item.email == localStorage.getItem('vacininha-jwt'))[0]
      });
      resolve(); 
    }else{
      dispatch({
        type: 'CARTEIRAS_DATA',
        errorRequest: true,
        payload: []
      }); 
    }
  }); 
};

export const fetchCarteirinhas = (query) => (dispatch) => { 
  promiseWrapper((resolve, reject, delay) => { 
    request.get(`/carteirinhas`)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'CARTEIRAS_DATA',
            errorRequest: false,
            payload: response.data
          });
          resolve(); 
        });
      })
      .catch((error) => {
        dispatch({
          type: 'CARTEIRAS_DATA',
          errorRequest: true,
          payload: []
        });
        reject();
      });
  });
};

export const changeUser = (user) => (dispatch) =>{
  return dispatch({
    type: 'SET_CURRENT_USER',
    payload: user 
  });
}

export const fetchVaccines = (userId) => (dispatch) => {
  promiseWrapper((resolve, reject, delay) => {
    request.get(`/vacinas/`+userId)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'VACCINES_DATA',
            errorRequest: false,
            payload: response.data
          });
          resolve();
        });
      })
      .catch((error) => {
        dispatch({
          type: 'VACCINES_DATA',
          errorRequest: true,
          payload: []
        });
        reject();
      });
  });
};

export const fetchMedidas = (userId) => (dispatch) => {
  promiseWrapper((resolve, reject, delay) => {
    request.get(`/medidas/`+userId)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'MEASURE_DATAS',
            errorRequest: false,
            payload: response.data
          });
          resolve();
        });
      })
      .catch((error) => {
        dispatch({
          type: 'MEASURE_DATAS',
          errorRequest: true,
          payload: []
        });
        reject();
      });
  });
};

export const fetchMedidasAlteradas = (userId, body) => (dispatch) => {
  return promiseWrapper((resolve, reject, delay) => {
    request.post(`/medidas/ `,body)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'MEASURE_UPDATE_DATAS',
            errorRequest: false,
            payload: response.data
          });
          resolve();
        });
      })
      .catch((error) => {
        dispatch({ 
            type: 'MEASURE_UPDATE_DATAS_ERROR',
            errorRequest: true,
            payload: error
          });
          reject();
        });
    });
  };
export const postCarteira = (body) => (dispatch) => {
  return promiseWrapper((resolve, reject, delay) => {
    request.post(`/carteirinhas`, body)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'CARTEIRINHA_POST',
            errorRequest: false,
            payload: response.data
          });
          resolve();
        });
      })
      .catch((error) => {
        dispatch({
          type: 'CARTEIRINHA_POST',
          errorRequest: true,
          payload: []
        });
        reject();
      });
  });
};
export const changeVaccine = (body) => (dispatch) => {

  return promiseWrapper((resolve, reject, delay) => { 
    request.post('vacinas', body)
      .then((response) => { 
        delay(() => {
          dispatch({
            type: 'SAVE_DATACSV',
            payload: response.data
          });
          dispatch({
            type: 'UPDATE_DATACSV',
            payload: body
          });
          resolve();
          
        });
      })
      .catch((error) => { 
        dispatch({
          type: 'SAVE_DATACSV_ERROR',
          payload: error
        }); 
        reject();
      });
  });
};
