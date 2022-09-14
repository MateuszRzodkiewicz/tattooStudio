import React, { useEffect, useState, useRef } from "react";
import "../../../../Css/HomeStartPage.css";
import HomeSection from "./homeSection/HomeSection";
import tattoo from "../../../../assets/pictures/tattoo.jpg";
import tattoo1 from "../../../../assets/pictures/tattoo1.jpg";
import tattoo2 from "../../../../assets/pictures/tattoo2.jpg";
import GaleryHomePics from "../GaleryHomePics/GaleryHomePics";

const pictures = [
  { tattoo: tattoo, id: 0 },
  { tattoo: tattoo1, id: 1 },
  { tattoo: tattoo2, id: 2 },
];

function HomeStartPage2() {
  const [index, setIndex] = useState(0);
  const [turnInterval, setTurnInterval] = useState(false);

  const indexCalback = useRef();
  useEffect(() => {
    const indexef = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);
    }, 8000);
    indexCalback.current = indexef;
    return () => {
      clearInterval(indexef);
    };
  }, [turnInterval]);

  useEffect(() => {
    if (index === 3) {
      setIndex(0);
    }
  }, [index]);

  const handlePictures = (number) => {
    setIndex(number);
    clearInterval(indexCalback.current);
    setTurnInterval((prevTurnInterval) => !prevTurnInterval);
  };

  return (
    <div id="header">
      <div className="contenerImg carouselImg">
        <div style={{ positon: "relative", overflow: "hidden" }}>
          {pictures.map((pic) => (
            <img
              style={{
                ...{
                  transition: "opacity 2s",
                },
                ...(index === pic.id ? { opacity: 1 } : { opacity: 0 }),
              }}
              src={pic.tattoo}
              alt={pic.id}
              key={pic.id}
            />
          ))}
        </div>
      </div>
      <div className="contenerforbutton">
        {pictures.map((picDiv) => (
          <div
            key={picDiv.id}
            className="button"
            onClick={() => handlePictures(picDiv.id)}
            style={index === picDiv.id ? { backgroundColor: "black" } : null}
          ></div>
        ))}
      </div>
      <HomeSection />
      <GaleryHomePics />
    </div>
  );
}

export default HomeStartPage2;
