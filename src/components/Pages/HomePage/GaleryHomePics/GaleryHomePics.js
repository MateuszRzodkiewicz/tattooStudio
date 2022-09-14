import bird from "../../../../assets/TattoPics/bird.jpg";
import eyeAndBird from "../../../../assets/TattoPics/eyeAndBird.jpg";
import owl from "../../../../assets/TattoPics/owl.jpg";
import tattooArm from "../../../../assets/TattoPics/tattooArm.jpg";
import womanFeniks from "../../../../assets/TattoPics/womanFeniks.jpg";
import tattooHands from "../../../../assets/TattoPics/tattooHands.jpg";
import amazonTattoo from "../../../../assets/TattoPics/amazonTattoo.jpg";
import hennaHand from "../../../../assets/TattoPics/hennaHand.jpg";
import ArtistDiv from "./ArtistDiv";
import santaOwl from "../../../../assets/TattoPics/santaOwl.jpg";
import "../../../../Css/ArtistDiv.css";
import "../../../../Css/GaleryHomePics.css";

import { useEffect, useState } from "react";

const tattooPics = [
  { pics: bird, id: 0, artistName: "Majk Rosal" },
  { pics: eyeAndBird, id: 1, artistName: "Anna Green" },
  { pics: owl, id: 2, artistName: "Majkel Jordan" },
  { pics: tattooArm, id: 3, artistName: "Anna Green" },
  { pics: womanFeniks, id: 4, artistName: "Majk Rosal" },
  { pics: tattooHands, id: 5, artistName: "Anna Green" },
  { pics: amazonTattoo, id: 6, artistName: "Majkel Jordan" },
  { pics: hennaHand, id: 7, artistName: "Anna Green" },
  { pics: santaOwl, id: 8, artistName: "Majk Rosal" },
];

function GaleryHomePics() {
  const [hover, setHover] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [artName, setArtName] = useState("");
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const ePageX = (e) => {
    setCursorX(e.pageX);
  };

  const ePageY = (e) => {
    setCursorY(e.pageY);
  };

  useEffect(() => {
    document.addEventListener("mousemove", ePageX);
    document.addEventListener("mousemove", ePageY);
    return () => {
      document.removeEventListener("mousemove", ePageX);
      document.removeEventListener("mousemove", ePageY);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  const hoverImgTrue = (artt) => {
    setHover(true);
    setArtName(artt);
  };
  const hoverImgFalse = () => {
    setHover(false);
  };
  return (
    <div id="galery">
      <div>
        <h1>NASZE PRACE</h1>
      </div>
      <section>
        {tattooPics.map((img) => (
          <img
            className="imgGalery"
            onMouseEnter={() => {
              hoverImgTrue(img.artistName);
            }}
            onMouseLeave={hoverImgFalse}
            src={img.pics}
            alt={`Artist: ${img.artistName}`}
            key={img.id}
          />
        ))}
        {hover && (
          <ArtistDiv
            hover={hover}
            scroll={scroll}
            artName={artName}
            cursorX={cursorX}
            cursorY={cursorY}
          />
        )}
      </section>
    </div>
  );
}

export default GaleryHomePics;
