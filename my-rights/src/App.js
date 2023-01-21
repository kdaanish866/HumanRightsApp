import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";



function App(){
  return (
 
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/search" component={Search}/>
      <Route path="/profile" component={Profile}/>

    </Switch>

  )
}

export default App;
