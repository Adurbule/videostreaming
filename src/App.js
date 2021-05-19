import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Player from "./components/Player"

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/playvideo" exact component={Player}/>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
