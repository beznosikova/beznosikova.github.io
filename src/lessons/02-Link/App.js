// https://jsbin.com/wemudus

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);
const Home = () => <h1>Home</h1>;

const App = props => (
  <Router basename={props.path}>
    <div>
      <Links />
      <Route exact path="/" component={Home} />
      <Route path="/about" render={() => <h1>About</h1>} />
      <Route path="/contact" render={() => <h1>Contact</h1>} />
    </div>
  </Router>
);

export default App;
