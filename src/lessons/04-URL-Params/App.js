import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const H = props => {
  console.log("1", props);
  return <div />;
};
const App = props => (
  <Router basename={props.path}>
    <div>
      <Route
        path="/:page?-:subpage?"
        // render={({ match }) => console.log(match)}
        component={H}
      />
    </div>
  </Router>
);

export default App;
