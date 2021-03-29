import "./style.css";
import React, { useState } from "react";
import { useTrail, a } from "react-spring";
import Testimonials from "../../components/Testimonials";

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? "auto" : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div className="p-0 m-0" {...props}>
      {trail.map(({ x, height, ...rest }, index) => (
        <a.div
          key={items[index]}
          className="p-0 m-0"
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
          }}
        >
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}

export default function About() {
  const [open, set] = useState(true);
  return (
    <>
      <div id="about" className="container">
        <Trail open={open}>
          <div className="row">
            <div className="col-12">
              <div className="pagetitle">ABOUT</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 bio mx-auto">
              <div>
                Full stack web developer with a background in the music
                business. Successfully managed tours for a Sony artist providing
                support for national acts like Lynyrd Skynyrd. Known for my time
                management skills and discipline, I taught myself XML languages
                and got offered a job as junior programmer at a technical
                publications company. Recently earned a certificate in Full
                Stack Web Development from Vanderbilt University learning HTML,
                CSS, and JavaScript. Motivated to work with a team invested in
                developing cutting-edge web applications. My determination
                combined with diligence makes me a reliable and successful team
                member.
              </div>
            </div>
            <div className="col-md-5 mx-auto propic">
              <img
                src={process.env.PUBLIC_URL + "/images/professional_pic.JPG"}
                className="img-fluid "
                alt="Portrait of Eric LaFontsee"
              />
            </div>
          </div>
          {/* <div
            className="row testimonials"
            style={{
              marginTop: '-200px',
              background: `url(${process.env.PUBLIC_URL}/images/wave.svg)`
            }}
          >
            <div className="col-md-12">
              <Testimonials />
            </div>

          </div> */}
        </Trail>
      </div>
    </>
  );
}
