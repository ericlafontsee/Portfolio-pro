import "./style.css";
import Navbar from "../Navbar";
import React, { useState } from "react";
import { useTrail, a } from "react-spring";

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 1000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : -20,
    height: open ? "auto" : 0,
    from: { opacity: 0, x: -20, height: 0 }
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

function Header() {
  const [open, set] = useState(true);

  return (
    <header id="header" className="container-fluid">
      <Trail open={open}>
        <div className="row">
          <div className="col-md-10">
            <a href='/'>
              <img
                className="img logo"
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt={"logo"}
              />
            </a>
          </div>
          <div className="col-md-2">
            <Navbar />
          </div>
        </div>
      </Trail>
    </header>
  );
}
export default Header;
