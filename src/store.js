import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
// relative
import reducers from './reducers/';

const store = createStore(
	reducers,
	{},
	compose(applyMiddleware(ReduxThunk)),
);


export default store;