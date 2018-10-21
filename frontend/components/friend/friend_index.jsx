import React from 'react';

class FriendIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchFriends();
    }

    render() {
        return (
            <div>
                <h1>Friends:</h1>
            </div>
        );
    }
}

export default FriendIndex;
