import "./AppHeader.css";
import { Switch, Route } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="AppHeader">
      <Switch>
        <Route path="/courses">
          <h1>Courses</h1>
        </Route>
        <Route path="/students">
          <h1>Students</h1>
        </Route>
      </Switch>
    </header>
  );
}