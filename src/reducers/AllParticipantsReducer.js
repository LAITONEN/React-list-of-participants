import _ from 'lodash';
import { ADD_PARTICIPANT, EDIT_PARTICIPANT, DELETE_PARTICIPANT, FETCH_PARTICIPANTS } from '../actions/types';


const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	const { payload, type } = action;

	switch(type) {
		case FETCH_PARTICIPANTS:
			return payload;

		case ADD_PARTICIPANT:
			// sort elements by whatever they are served by in the Table
			// meaning => pass the "sorting value" to the action
			return { ...state, payload };

		case EDIT_PARTICIPANT:
			const newState = _.mapValues(state, (currentValue, id) => {
				return id === payload.id ? payload : currentValue;
			});
			return { ...newState, payload };
				
		case DELETE_PARTICIPANT:
			return Object.assign({}, _.filter(state, (v, id) => id !== payload ));

		default: 
			return state;
	}
};