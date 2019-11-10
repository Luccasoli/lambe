import { createStore, combineReducers } from 'redux';
import userReducer from './user';
import postsReducer from './posts';

// State Global
const reducers = combineReducers({
	user: userReducer,
	posts: postsReducer
});

const storeConfig = () => {
	return createStore(reducers);
};

export default storeConfig;
