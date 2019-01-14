import { connect } from 'react-redux';
import { fetchFriend } from '../../actions/friend_actions';
import FriendShow from './friend_show';

const mapStateToProps = state => ({
  friend: state.currentFriend
});

const mapDispatchToProps = dispatch => ({
  fetchFriend: id => dispatch(fetchFriend(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendShow);
