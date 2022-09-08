import React, { useEffect } from "react";
import "./Navigation2.css";
import { useState } from "react";
import redSkull from "./redSkull.png";
function Navigation2() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    let isMounted = false;
    if (!isMounted) {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    }

    return () => {
      isMounted = true;

      window.addEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  return (
    <nav
      style={
        scroll > 670
          ? { top: 0, transition: "0.5s" }
          : { top: -80, transition: "0.5s" }
      }
      className="nav2"
    >
      <ul
        style={
          scroll > 670
            ? { opacity: 1, transition: "0.8s" }
            : { opacity: 0, transition: "0.8s" }
        }
        className="navigation2"
      >
        <li>
          <a href="#article">Artykuły</a>
        </li>
        <li>
          <a href="#dudes">Ekipa</a>
        </li>
        <li>
          <a href="#header">
            <img className="rotateImg" src={redSkull} alt="skull" />
          </a>
        </li>
        <li>
          <a href="#galery">Galeria</a>
        </li>
        <li>
          <a href="#concact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation2;
