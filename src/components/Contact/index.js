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
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });
  return (
    <div className="trails-main" {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            className="trails-text"
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
    <div className="container-fluid">
      <Trail open={open}>
        <div className="row">
          <div className="col-md-12">
            <div className="pagetitle">CONTACT</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <FontAwesomeIcon
              className="icon phone"
              icon={faPhone}
              style={{ background: "none", color: "white", fontSize: "30pt" }}
            />
            <FontAwesomeIcon
              className="icon email"
              icon={faEnvelope}
              style={{ background: "none", color: "white", fontSize: "30pt" }}
            />
            <FontAwesomeIcon
              className="icon linkedin"
              icon={faLinkedin}
              style={{ background: "none", color: "white", fontSize: "30pt" }}
            />
            <FontAwesomeIcon
              className="icon githubico"
              icon={faGithub}
              style={{ background: "none", color: "white", fontSize: "30pt" }}
            />
          </div>
        </div>
      </Trail>
    </div>
  );
}

export default Contact;
