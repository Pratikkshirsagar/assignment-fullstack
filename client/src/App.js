import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HomeGuest from './components/HomeGuest';
import Footer from './components/Footer';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [loggedIn, setLoggedIn] = useState();
  const [userdata, setUserdate] = useState();
  return (
    <BrowserRouter>
      <Header
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        setUserdate={setUserdate}
      />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home userdata={userdata} /> : <HomeGuest />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
