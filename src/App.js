import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return <div className="App">
    <header className="App__header">
      Header
    </header>
    <main className="App__content">
    <Switch>
      <Route path="/courses">
        <CoursesPage />
      </Route>
      <Route path="/students">
        Students
      </Route>
      <Route path="/">
        <Redirect to="/courses" />
      </Route>
    </Switch>
    </main>
    
    <footer className="App__footer">
      <Navigation />
    </footer>
  </div>;
}

export default App;
