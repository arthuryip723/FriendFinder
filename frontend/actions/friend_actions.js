import * as APIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

export const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
});

export const fetchFriends = () => dispatch =>(
    APIUtil.fetchFriends().then(friends => (
        dispatch(receiveFriends(friends))
    ))
);
