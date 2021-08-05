import { combineReducers } from 'redux';

//REDUCER
import monitores from './reducer/Monitores';
import Input from './reducer/Inputs';

export default combineReducers({
  monitores,
  Input
});