import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { useState } from "react";
import { useTrail, a } from "react-spring";

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div className="trails-contact" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`)
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const [open, set] = useState(true);

  return (
    <div className="container contact">
      <Trail open={open}>
        <div className="row">
          <div className="col-md-12">
            <div className="pagetitle">CONTACT</div>
          </div>
        </div>
        <div className="row icons">
          <div className="col-md-3">
            <a href="tel:+9522885051" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="icon phone contactico"
                icon={faPhone}
                style={{ background: "none", color: "white", fontSize: "50pt" }}
              />
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="mailto:elafontsee@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon email contactico"
                icon={faEnvelope}
                style={{ background: "none", color: "white", fontSize: "50pt" }}
              />
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="https://www.linkedin.com/in/eric-lafontsee-a2b65a6b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon linkedin contactico"
                icon={faLinkedin}
                style={{ background: "none", color: "white", fontSize: "50pt" }}
              />
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="https://github.com/ericlafontsee"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="icon githubico contactico"
                icon={faGithub}
                style={{ background: "none", color: "white", fontSize: "50pt" }}
              />
            </a>
          </div>
        </div>
      </Trail>
    </div>
  );
}

export default Contact;
