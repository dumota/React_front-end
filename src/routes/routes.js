import React from 'react';
import Register from '../components/register'
import Home from '../components/home'
import Login from '../components/login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
}from 'react-router-dom'


export default function Routes(){

    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Switch>
    )

}