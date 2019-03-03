import React from 'react'
import { Switch, Route } from 'react-router-dom';
import userList from './userList';
import Game from '../tick-tack-toe/Game';

// The Roster component matches one of two different routes
// depending on the full pathname
const UsersRoute = () => (
    <Switch>
        <Route exact path='/' component={userList} />
        <Route path='/user-list' component={userList} />
        <Route path='/game' component={Game} />
    </Switch>
)


export default UsersRoute;
