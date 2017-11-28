import { ADD_PARTICIPANT, FETCH_PARTICIPANTS } from '../actions/types';


const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	const { payload, type } = action;

	switch(type) {
		case FETCH_PARTICIPANTS:
			return payload;

		case ADD_PARTICIPANT:
			return state;

/*		case EDIT_PARTICIPANT:
				return { ...state, payload };
				
		case DELETE_PARTICIPANT:
				return { ...state, payload };*/

		default: 
			return state;
	}
};