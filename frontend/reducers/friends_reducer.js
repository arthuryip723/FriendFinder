import merge from 'lodash/merge';

import { RECEIVE_FRIENDS } from '../actions/friend_actions';

const friendsReducer = (state={ babes: [], currentBabe: {} }, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_FRIENDS:
            newState.friends = action.friends;
            return newState;
        default:
            return state;
    }
};

export default friendsReducer;
