import React from 'react';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/Abouts/About/About';
import Club from './Component/Club/Club/Club';
import Join from './Component/Join/Join/Join';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Football from './Component/Join/Football/Football';
import Cricket from './Component/Join/Cricket/Cricket';
import Contact from './Component/Contact/Contact';
import News from './Component/News/News';
import Community from './Component/Community/Community';
import Youth from './Component/Youth/Youth';
import Projects from './Component/Projects/Projects';
import Governance from './Component/Governance/Governance';
import GallerySecond from './Component/Gallery/GallerySecond/GallerySecond';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
              <Home></Home>
          </Route>
          <Route path="/abouts">
              <About></About>
          </Route>
          <Route path="/club">
              <Club></Club>
          </Route>
          <Route path="/join">
              <Join></Join>
          </Route>
          <Route path="/football">
              <Football></Football>
          </Route>
          <Route path="/cricket">
              <Cricket></Cricket>
          </Route>
          <Route path="/news">
              <News></News>
          </Route>
          <Route path="/contact">
              <Contact></Contact>
          </Route>
          <Route path="/community">
              <Community></Community>
          </Route>
          <Route path="/youth">
             <Youth></Youth>
          </Route>
          <Route path="/gallery">
             <GallerySecond></GallerySecond>
          </Route>
          <Route path="/projects">
             <Projects></Projects>
          </Route>
          <Route path="/governance">
            <Governance></Governance>
          </Route>
          <Route exact path="/">
              <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
