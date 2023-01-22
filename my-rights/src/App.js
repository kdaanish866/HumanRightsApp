/* CHANGES BY RACHEL */

import React from "react";
import './App.css';
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Profile from "./Pages/Profile";
import Register from "./Pages/Register";
import OfficerList from "./Components/OfficerList";
import Results from "./Pages/Results";
// import Modal from "./Components/Modal";
// import Navbar from "./Components/Navbar";



const App=()=>{

  return (
    <>   
  <Switch>
    <Route exact path="/" component={Landing}/>
    {/* <Navbar/> */}
    <Route path="/profile" component={Profile}/>
    <Route path="/register" component={Register}/>
    <Route path="/officers" component={OfficerList}/>
    <Route path="/results" component={Results}/>

  </Switch>
    </>
  )
}

export default App;

/* CHANGES BY RACHEL */
