import React from 'react';

class FriendIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <h1>Friends:</h1>
                <ul>
                    {this.props.friends.map((friend, idx) => <li key={idx}>{friend.name}</li>)}
                </ul>
            </div>
        );
    }
}

export default FriendIndex;
