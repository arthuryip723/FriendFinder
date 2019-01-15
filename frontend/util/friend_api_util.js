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

export const createReview = data => (
  $.ajax({
    mathod: 'POST',
    url: 'api/reviews',
    data
  })
);
