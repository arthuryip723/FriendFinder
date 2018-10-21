import { connect } from 'react-redux';
import { fetchFriends } from '../../actions/friend_actions';
import FriendIndex from './friend_index';

const mapStateToProps = state => ({
    friends: state.friends
});

const mapDispatchToProps = dispatch => ({
    fetchFriends: () => dispatch(fetchFriends())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendIndex);
