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