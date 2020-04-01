import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpLogin from './pages/signUpLogin/signUpLogin';
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import Feed from './pages/Feed/Feed';
import Profile from './pages/Profile/Profile';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
      <Route path ='/login'   component ={Login} />
      <Route path ='/forget-password'  component ={ForgetPassword} />
      <Route path ='/feed'  component ={Feed} />
      <Route path ='/profile'  component ={Profile} />
      <Route path ='/' exact component ={SignUpLogin} />
      
      </Switch>
    </React.Fragment>
  );
}

export default App;
