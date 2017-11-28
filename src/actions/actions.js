import firebase from '../firebase';
// relative
import { ADD_PARTICIPANT, FETCH_PARTICIPANTS } from './types';

export const fetchParticipants = () => {
	return (dispatch) => {
		firebase.database().ref('/participants').on('value', snapshot => {
			dispatch({ payload: snapshot.val(), type: FETCH_PARTICIPANTS })
		});
	}
}

export const addParticipant = (participant) => {
	return (dispatch) => {
		firebase.database().ref('/participants').push(participant)
		.then(dispatch({ payload: participant, type: ADD_PARTICIPANT }));
	}
}