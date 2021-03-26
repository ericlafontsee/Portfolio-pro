import React, { useState } from "react";
import { useTrail, a } from "react-spring";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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

function Resume() {
  const [open, set] = useState(true);

  return (
    <>
      <Trail open={open}>
        <section className="container">
          <div className="row">
            <div className="col-12">
              <div className="pagetitle">RESUME</div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-10 mx-auto d-flex justify-content-center">
              <div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1C9PPHpUqlApqWvdPoy7IOjx7Qaa7Tp6P/view?usp=sharing"
                >
                  <FontAwesomeIcon
                    size="4x"
                    className="icon"
                    icon={faDownload}
                  />
                </a>
                <img
                  src={process.env.PUBLIC_URL + "/images/resume_2021.png"}
                  className="resume card-img-top img-fluid w-100"
                  alt="Eric LaFontsee's Resume"
                />
              </div>
            </div>
          </div>
        </section>
      </Trail>
    </>
  );
}

export default Resume;
