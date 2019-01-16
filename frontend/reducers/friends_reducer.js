import merge from 'lodash/merge';

import { RECEIVE_FRIEND, RECEIVE_FRIENDS, RECEIVE_REVIEW } from '../actions/friend_actions';

const friendsReducer = (state={ friends: [], currentFriend: {} }, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch (action.type) {
        case RECEIVE_FRIENDS:
            newState.friends = action.friends;
            return newState;
        case RECEIVE_FRIEND:
          newState.currentFriend = action.friend;
          return newState;
        case RECEIVE_REVIEW:
          newState.currentFriend.reviews.push(action.review);
          return newState;
        default:
            return state;
    }
};

export default friendsReducer;
