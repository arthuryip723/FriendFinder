export const fetchFriends = () => (
    $.ajax({
        method: 'GET',
        url: 'api/friends',
    })
);

export const fetchFriend = id => (
  $.ajax({
    method: 'GET',
    url: `api/friends/${id}`,
  })
);
