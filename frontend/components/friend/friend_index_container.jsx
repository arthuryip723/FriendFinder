import { connect } from 'react-redux';
import { fetchFriends } from '../../actions/friend_actions';
import { asArray } from '../../reducers/selectors';
import FriendIndex from './friend_index';

const mapStateToProps = state => ({
    friends: asArray(state.friends)
});

const mapDispatchToProps = dispatch => ({
    fetchFriends: () => dispatch(fetchFriends())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FriendIndex);
