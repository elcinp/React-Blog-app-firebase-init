import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import Detail from '../pages/Detail'
import NewBlog from '../pages/NewBlog'
import UpdateBlog from '../pages/UpdateBlog'

const AppRouter = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/ " exact component={Dasboard}/>
                
                <Route path="/profile " component={Profile}/>
                <Route path="/new-blog " component={NewBlog}/>
                <Route path="/update-blog " component={UpdateBlog}/>
                <Route path="/detail " component={Detail}/>
            </Switch>
        </Router>
    )
}

export default AppRouter
