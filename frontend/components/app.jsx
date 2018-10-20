import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FriendIndexContainer from './friend/friend_index_container';
import FriendShowContainer from './friend/friend_show_container';

const App = () => (
    <Switch>
        <Route exact path="/" component={FriendIndexContainer}/>
        <Route exact path="/friends" component={FriendIndexContainer}/>
        <Route exact path="/friends/:friendId" component={FriendShowContainer}/>
        <Route component={FriendIndexContainer}/>
    </Switch>
);

export default App;
