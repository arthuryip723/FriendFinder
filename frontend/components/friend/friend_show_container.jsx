import { connect } from 'react-redux';
import FriendShow from './friend_show';

const mapStateToProps = state => ({
  friend: state.friend
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: () => dispatch(fetchFriend())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendShow);
