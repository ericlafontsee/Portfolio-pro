import React from "react";
import "./style.css";

export default function Testimonials() {
  return (
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item active">
          <p className="qoute mx-auto">
            "Eric worked for our IT department working on projects for our high
            value customers. Eric studied the customer requirements and learned
            the work very quickly helping to deliver on time and on budget. Eric
            also completed additional education programs so that he has a very
            broad range of skills that will enable him to be successful in any
            future work he performs."
            <br />
            <br />
            <i>Jeffrey Brown VP of Operations - JANA, Inc</i>
          </p>
        </div>

        <div class="item">
          <p className="qoute mx-auto">
            Eric entered our boot camp full of optimism. Always prepared and
            ready to leverage his resources. He was the first student in and the
            last student out in our 2020 fall cohort. Eric came prepared with
            great questions that added momentum to lessons. Also, he spoke up
            when struggling with concepts. I feel it is very important to speak
            up early and often especially when dealing with tight deadlines.
            Eric entered the boot camp with a foundation of XML, HTML, and basic
            coding. Throughout the program, he displayed dependability, while
            often taking a collaborative leadership role in group projects. I
            feel Eric would be a great contributor to a goal-oriented team. He
            was a pleasure to have as a student. I know he is ready to step into
            a role and hit the ground running.
            <br />
            <br />
            <i>
              Anthony Cooper Lead Web Development Instructor - Vanderbilt
              University
            </i>
          </p>
        </div>

        <div class="item">
          <p className="qoute mx-auto">
            I have seen very few people work as hard as Eric. He and I worked
            together on almost every activity while we were going through
            Vanderbilt's web development bootcamp. No matter what we were
            working on or what problems we ran into Eric was always able to
            power through and get things done. If we ran into an extra hard
            problem he was not afraid to ask questions to make sure we fixed it
            correctly. He's also one of the nicest guys I've ever met and I know
            if I had trouble working through a project problem he wouldn't care
            to step in and help out. Eric would be an incredible asset to any
            team he was a part of. See less
            <br />
            <br />
            <i>Brendon Conatser - Web Developer</i>
          </p>
        </div>
      </div>

      <a class="left carousel-control" href="#myCarousel" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
