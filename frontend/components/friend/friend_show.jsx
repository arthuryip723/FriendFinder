import React from 'react';
import { Link } from 'react-router-dom';

// const FriendShow = () => (
//     <h1>You're in FriendShow.</h1>
// );
class FriendShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props.match.params.friendId);
    this.props.fetchFriend(this.props.match.params.friendId);
  }

  render() {
    return (
      <div>
        <h1>Friend details:</h1>
        <div>ID: {this.props.friend.id}</div>
        <div>Name: {this.props.friend.name}</div>
        <div>Age: {this.props.friend.age}</div>
        <br/>
        <Link to='/friends'>Go back</Link>
      </div>
    );
  }
}

export default FriendShow;
