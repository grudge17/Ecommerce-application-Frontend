import React from 'react'
import{BrowserRouter,Switch,Route} from 'react-router-dom'//this will wrap rest of the routes used,switch-switch case
import Signup from './user/Signup'
import Signin from './user/Signin'
import Home from './core/Home'

const Routes=()=>{
return (
<BrowserRouter>
    <Switch>
        <Route path='/signin' exact component={Signin} />
        <Route path ='/signup' exact component={Signup} />
        <Route path ='/' exact component={Home} />
    </Switch>
</BrowserRouter>)
}

export default Routes