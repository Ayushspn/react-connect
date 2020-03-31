import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpLogin from './pages/signUpLogin/signUpLogin';
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Switch>
      <Route path ='/login' exact  component ={Login} />
      <Route path ='/' exact component ={SignUpLogin} />
      
      </Switch>
    </React.Fragment>
  );
}

export default App;
