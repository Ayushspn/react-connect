import React from 'react';
import { Route } from 'react-router-dom';
import SignUpLogin from './pages/signUpLogin/signUpLogin';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Route to ='/' component ={SignUpLogin} />
    </React.Fragment>
  );
}

export default App;
