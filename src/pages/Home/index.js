import React from "react";
import About from "../../components/About";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import Testimonials from "../../components/Testimonials";
import Resume from "../../components/Resume";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";




function Home() {


  return (
    <>
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
        <div className="container-fluid polygon">

        </div>
      </BrowserRouter>

    </>
  );
}

export default Home;
