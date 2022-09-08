import "./Pages.css";
import HomeStartPage from "../components/Pages/HomePage/HomeStart/HomeStartPage";
import Dudes from "../components/Pages/DudesPage/Dudes";
import MakeAnAppointment from "../components/Pages/Concact/MakeAnAppointment";

function Pages() {
  return (
    <div className="page">
      <HomeStartPage />
      <Dudes />
      <MakeAnAppointment />
    </div>
  );
}

export default Pages;
