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

export const fetchProductionData = (path, query) => (dispatch) => {
  promiseWrapper((resolve, reject, delay) => {
    request.get(`production/${path.component + '/' + path.componentId}/products${buildQuery(query, queryCustomRange)}`)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'FETCH_PRODUCTION_DATA',
            payload: response.data
          });
          resolve();
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_PRODUCTION_DATA_ERROR',
          payload: error
        });
        reject();
      });
  });
};

export const fetchEfficiencyData = (path, query) => (dispatch) => {
  dispatch(isFetchingData(true, 'efficiencyData'));
  return promiseWrapper((resolve, reject, delay) => {
    request.get(`efficiency/${path.component + '/' + path.componentId}${
      buildQuery(query, queryCustomRange)
      }`)
      .then((response) => {
        delay(() => {
          dispatch(isFetchingData(false, 'efficiencyData'));
          dispatch({
            type: 'FETCH_EFFICIENCY_DATA',
            payload: response.data
          });
          resolve();
        });
      })
      .catch((error) => {
        dispatch(isFetchingData(false, 'efficiencyData'));
        dispatch({
          type: 'FETCH_EFFICIENCY_DATA_ERROR',
          payload: error
        });
        reject();
      });
  });
};

export const fetchCarteirinhas = (query) => (dispatch) => { 
  promiseWrapper((resolve, reject, delay) => {
    console.log(localStorage.getItem('vacininha-jwt-uid'));
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
