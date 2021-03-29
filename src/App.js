import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Resume from "./pages/Resume";
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
            <Route exact path={"/testimonials"} component={Testimonials} />
            <Route exact path={"/resume"} component={Resume} />
          </Switch>
        </div>
        <div className="container-fluid polygon"></div>
      </BrowserRouter>
    </>
  );
}

export default App;
