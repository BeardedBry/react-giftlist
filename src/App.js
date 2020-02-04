import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";


function App() {


  return (
    <div className="App">
      <Router history={history}>
      <header>
        <TopBar />
      </header>
      <Switch>
          <Route path="/" exact />
          <Route path="/profile" component={Profile} />
          <Route path="/list" component={MainContent} />
      </Switch>

      </Router>
     
      {/* <SideBar user={userInfo}/> */}
      {/* <MainContent /> */}
    </div>
  );
}



export default App;
