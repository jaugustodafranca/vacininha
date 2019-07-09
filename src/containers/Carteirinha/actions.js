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
  dispatch(isFetchingData(true, 'events'));
  promiseWrapper((resolve, reject, delay) => {
    console.log(localStorage.getItem('vacininha-jwt-uid'));
    request.get(`/carteirinhas`)
      .then((response) => {
        delay(() => {
          dispatch({
            type: 'MANUAL_EVENTS',
            errorRequest: false,
            payload: response.data
          });
          resolve();
          dispatch(isFetchingData(false, 'events'));
        });
      })
      .catch((error) => {
        dispatch({
          type: 'MANUAL_EVENTS',
          errorRequest: true,
          payload: []
        });
        reject();
      });
  });
};

export const fetchMedidas = () => (dispatch) => {
  promiseWrapper((resolve, reject, delay) => {
    request.get(`/medidas/3`)
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