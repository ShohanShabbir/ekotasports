
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

function App() {
  return (
    <div>
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
          <Route path="/contact">
              <Contact></Contact>
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
