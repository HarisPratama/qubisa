import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'thunk';
import thunk from 'redux-thunk';
import posts from './reducers/post';

const reducers = combineReducers({
	posts
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

