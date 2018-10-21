export const RECEIVE_FRIENDS = 'RECEIVE_FRIENDS';

export const receiveFriends = friends => ({
    type: RECEIVE_FRIENDS,
    friends
});

export const fetchFriends = () => dispatch =>(
    dispatch(receiveFriends({
        1: {id: 1, name: 'Kate', age: 20},
        2: {id: 2, name: 'Joan', age: 22}
    }))
);
