import { IS_FETCHING, MONITORES_FETCHED, ERROR_FETCHING_MONITORES } from '../actions/Monitores';

const initialState = {
  datamonitores: [],
  fetching: false,
  fetched: false,
  error: null
};

const monitores = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return { ...state, fetching: true };

    case MONITORES_FETCHED:
      return {
        ...state,
        fetched: true,
        fetching: false,
        datamonitores: action.payload
      };

    case ERROR_FETCHING_MONITORES:
      return { ...state, fetching: false, error: action };

    default:
      return state;
  }
};
export default monitores;