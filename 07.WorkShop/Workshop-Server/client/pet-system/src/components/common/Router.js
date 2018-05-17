import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ListPetsPage from '../Pets/ListPetsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={ListPetsPage} />
        <Route path='/users/register' component={RegisterPage} />
        <Route path='/users/login' component={LoginPage} />
    </Switch>
)

export default Router