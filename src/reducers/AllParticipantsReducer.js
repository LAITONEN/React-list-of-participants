import _ from 'lodash';
import { 
		FETCH_PARTICIPANTS, 
		SORT_PARTICIPANTS 
	} from '../actions/types';


const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	const { payload, sortingRules, type } = action;
	switch(type) {
		case FETCH_PARTICIPANTS:
			const payloadWithIdProp = _.mapValues(payload, (v, i) => {
				return {...v, id: i};
			});
			if (!Object.keys(state).length) {
				return _.orderBy(payloadWithIdProp, ['name'], ['asc'])
					.reduce((acc, v, i) => {
						acc[i] = v;
						return acc;
					}, {});
			}
			return payloadWithIdProp; // key is an id as well

		case SORT_PARTICIPANTS:
			const arrayOfHeaders = [];
			const arrayOfOrders = [];
			sortingRules.forEach(sort => {
				arrayOfHeaders.push(sort.header);
				arrayOfOrders.push(sort.order);
			});
			const result =  _.orderBy(payload, arrayOfHeaders, arrayOfOrders)
				.reduce((acc, v, i) => {
				acc[i] = v;
				return acc;
			}, {});
			return result;

		default: 
			return state;
	}
};