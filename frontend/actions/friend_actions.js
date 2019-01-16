import * as APIUtil from '../util/friend_api_util';

export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';
export const RECEIVE_FRIEND = 'RECEIVE_FRIEND';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
});

export const receiveFriend = friend => ({
  type: RECEIVE_FRIEND,
  friend
});

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

export const fetchFriends = () => dispatch => (
    APIUtil.fetchFriends().then(friends => (
        dispatch(receiveFriends(friends))
    ))
);

export const fetchFriend = id => dispatch => (
  APIUtil.fetchFriend(id).then(friend => (
    dispatch(receiveFriend(friend))
  ))
);

export const createReview = data => dispatch => (
  APIUtil.createReview(data).then(review => (
    dispatch(receiveReview(review))
  ))
);
