import { combineReducers } from 'redux';

import AllParticipantsReducer from './AllParticipantsReducer';


export default combineReducers({
	data: AllParticipantsReducer,
});