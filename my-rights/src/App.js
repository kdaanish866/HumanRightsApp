import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Search from "./Pages/Search";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";



function App(){
  return (
 
    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/search" component={Search}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/register" component={Register}/>

    </Switch>

  )
}

export default App;
