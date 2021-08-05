import axios from 'axios';
import { API } from '../../utils/Endpoints'

//CONSTANTES
export const IS_FETCHING = 'IS_FETCHING';
export const MONITORES_FETCHED = 'MONITORES_FETCHED';
export const ERROR_FETCHING_MONITORES = 'ERROR_FETCHING_MONITORES';

//PETICIONES HTTP
export const GetMonitores = () => {
  const data = null
  const headers = { "Content-Type": "application/json" }
  const monitores = axios.post(API + "Get_Monitor", data, headers)

  return dispatch => {
    dispatch({ type: IS_FETCHING });
    monitores
      .then(({ data }) => {
        dispatch({ type: MONITORES_FETCHED, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR_FETCHING_MONITORES, payload: err });
      });
  };
};
