import React from 'react';
import { Link } from 'react-router-dom';

class FriendShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        content: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.friendId);
  }

  handleSubmit(e) {
      e.preventDefault();
      const friendId = parseInt(this.props.match.params.friendId);
      // console.log(friendId);
      // console.log(this.state);
      // I need content here.
      const review = Object.assign({}, this.state, { friend_id: friendId });
      this.props.createReview(review);
  }

  update(property) {
      return e => this.setState({
          [property]: e.target.value
      })
  }

  render() {
    return (
      <div>
        <h1>Friend details:</h1>
        <div>ID: {this.props.friend.id}</div>
        <div>Name: {this.props.friend.name}</div>
        <div>Age: {this.props.friend.age}</div>
        <br/>
        <ul>
          {(this.props.friend.reviews || []).map((review, idx) => <li key={idx}>{review.content}</li>)}
        </ul>
        <br/>
        <form onSubmit={this.handleSubmit}>
            <textarea name="content" onChange={this.update('content')}></textarea>
            <br/>
            <button>Submit</button>
        </form>
        <br/>
        <Link to='/friends'>Go back</Link>
      </div>
    );
  }
}

export default FriendShow;
