import "./Navigation.css";
import redSkull from "./redSkull.png";
import React, { useState } from "react";

function Navigation() {
  const [navBar, setNavBar] = useState("closeNav");
  const handleChangeNavigationClose = () => {
    setNavBar("closeNav");
  };
  const handleChangeNavigationOpen = () => {
    setNavBar("openNav");
  };

  return (
    <div className={`${navBar} navBar`}>
      <i
        onClick={handleChangeNavigationClose}
        style={{
          position: "absolute",
          top: 0,
          right: 5,
        }}
        className="fas fa-bars iconNav"
      />
      <i
        onClick={handleChangeNavigationOpen}
        style={{
          color: "black",
          position: "fixed",
          top: 0,
          left: 5,
        }}
        className="fas fa-bars iconNav"
      />
      <nav>
        <ul className="navigation">
          <li>
            <a onClick={handleChangeNavigationClose} href="#article">
              Artykuły
            </a>
          </li>
          <li>
            <a onClick={handleChangeNavigationClose} href="#dudes">
              Ekipa
            </a>
          </li>
          <li>
            <a onClick={handleChangeNavigationClose} href="#header">
              <img className="rotateImg" src={redSkull} alt="skull" />
            </a>
          </li>
          <li>
            <a onClick={handleChangeNavigationClose} href="#galery">
              Galeria
            </a>
          </li>
          <li>
            <a onClick={handleChangeNavigationClose} href="#concact">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
