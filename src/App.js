import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Testimonials from "./pages/Testimonials";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div className="container-fluid mainContent">
          <Switch>
            <Route exact path={"/"} component={About} />
            <Route exact path={"/projects"} component={Projects} />
            <Route exact path={"/contact"} component={Contact} />
            <Route exact path={"/resume"} component={Resume} />
            <Route exact path={"/testimonials"} component={Testimonials} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
