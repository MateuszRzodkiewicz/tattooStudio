import tattooWork from "./tattooWork.jpg";
// import "./MakeAnAppointment.css";
import "../../../Css/MakeAnAppointment.css";
import { useState } from "react";
import ConcactPopUp from "./PopUp/CocncactPopUp";

const tattooWorks = tattooWork;

function MakeAnAppointment() {
  const [popUp, setPopUp] = useState(false);

  const handlePopUp = () => setPopUp(!popUp);
  return (
    <div id="concact">
      <img src={tattooWorks} alt="work" />
      <button className="makeAppointment" onClick={handlePopUp}>
        Umów się na sesje
      </button>
      {popUp && <ConcactPopUp handlePopUp={handlePopUp} />}
    </div>
  );
}

export default MakeAnAppointment;
