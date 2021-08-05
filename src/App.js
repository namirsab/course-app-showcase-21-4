import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return <div className="App">
    <Switch>
      <Route path="/courses">
        Courses
      </Route>
      <Route path="/students">
        Students
      </Route>
      <Route path="/">
        <Redirect to="/courses" />
      </Route>
    </Switch>
  </div>;
}

export default App;
