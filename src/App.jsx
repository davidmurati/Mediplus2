import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import Login from "./Component/Login/Login";
import Servicio from "./Component/Servicio/Servicio";



function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/Login">
          <Header />
          <Login />
        </Route>
        <Route exact path="/Servicio">
          <Header />
          <Servicio />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

