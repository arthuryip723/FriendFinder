import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import friendsReducer from '../reducers/friends_reducer';

const configureStore = (preloadedState={ babes: [], currentBabe: {} }) => (
    createStore(
        friendsReducer,
        preloadedState,
        applyMiddleware(thunk)
    )
);

export default configureStore;
