import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';
import './App.css';
import LoginComponent from './components/Login';
import NavbarComponent from './components/navbar';
import RegisterComponent from './components/Register'
import ListsComponent from './components/Lists'

function App() {
  const [authenticationJWT, changeAuthJWT] = useState('');

  /*
    USE EFFECT NOTES:
    If you make a useEffect without an array, it will fire each timethe app is rendered to the screen
    If you have an empty array in the useEffect, it will fire only when the component is first MOUNTED to the screen
    If you include a dependency imn the array, it will fire when that dependency is updated
  */

  useEffect(() => {
    if(window.localStorage.getItem('authToken')) {
      changeAuthJWT(window.localStorage.getItem('authToken'));
    }
  }, [])

  const authenticateUser = (token) => {
    //Purpose: Save the JWT Locally AND in the browser
    window.localStorage.setItem("authToken", token)

    changeAuthJWT(token);
  }

  return (
    <BrowserRouter>
    <div className="App">
        <NavbarComponent isLoggedIn={authenticationJWT} />
        <Switch>
          <Route exact path="/login">
            <LoginComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/register">
            <RegisterComponent authenticateUser={authenticateUser} />
          </Route>
          <Route exact path="/lists">
            <ListsComponent token={authenticationJWT} />
          </Route>
        </Switch>
        
    </div>
    </BrowserRouter>
  );
}

export default App;
