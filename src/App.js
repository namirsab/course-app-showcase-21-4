import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import CoursesPage from "./pages/CoursesPage";
import StudentsPage from "./pages/StudentsPage";
import AppHeader from "./components/AppHeader";

function App() {
  return <div className="App">
    <AppHeader />
    <main className="App__content">
    <Switch>
      <Route path="/courses">
        <CoursesPage />
      </Route>
      <Route path="/students">
        <StudentsPage />
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
