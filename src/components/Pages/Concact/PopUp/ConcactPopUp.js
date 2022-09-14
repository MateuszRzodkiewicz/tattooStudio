import "../../../../Css/ConcactPopUp.css";
import React, { useState } from "react";
import { artists } from "../../../constants/sectOptions";

function ConcactPopUp({ handlePopUp }) {
  const [emailValue, setEmailValue] = useState("");
  const [value, setValue] = useState("Wybierz artyste");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({
    email: false,
    value: false,
    phone: false,
  });
  const [correct, setCorrect] = useState(false);
  const changeValue = (e) => setEmailValue(e.target.value);

  const changePhoneValue = (e) => {
    setPhoneNumber(e.target.value);
  };

  const sendForm = () => {
    const newErrors = { email: false, value: false, phone: false };

    if (phoneNumber.length !== 9) {
      newErrors.phone = true;
      setPhoneNumber("");
    }

    if (value === "Wybierz artyste") {
      newErrors.value = true;
    }
    if (!emailValue.includes("@")) {
      newErrors.email = true;
      setEmailValue("");
    }

    if (!newErrors.email && !newErrors.value && !newErrors.phone) {
      setEmailValue("");
      setValue("Wybierz artyste");
      setPhoneNumber("");
      setCorrect(true);
    }

    setErrors(newErrors);
  };

  const handleChangeSelect = (e) => setValue(e.target.value);

  const artistOptions = artists.map((artist) => (
    <option key={artist.value} value={artist.value}>
      {artist.label}
    </option>
  ));

  return (
    <div className="blur">
      <div className="popUpContainer flexContainer">
        <h1 className="signUp">Zapisz się</h1>
        <p className="correctPopUp">
          {correct && "Dziękujemy, Prosimy czekać na kontakt"}
        </p>
        <span className="popUpSpan">
          {errors.email && "Niepoprawny email!"}
        </span>
        <input
          className="email"
          type="email"
          placeholder="Email"
          onChange={changeValue}
          value={emailValue}
        />
        <span className="popUpSpan">
          {errors.phone && "Niepoprawny numer!"}
        </span>

        <input
          className="phoneNumber"
          type="tel"
          placeholder="Numer telefonu"
          onChange={changePhoneValue}
          value={phoneNumber}
        />
        <span className="popUpSpan">{errors.value && "Wybierz artystę!"}</span>

        <select value={value} onChange={handleChangeSelect}>
          {artistOptions}
        </select>

        <button className="popUpButton" type="submit" onClick={sendForm}>
          Wyślij
        </button>
        <button className="popUpButton" onClick={handlePopUp}>
          Opuść
        </button>
      </div>
    </div>
  );
}

export default ConcactPopUp;
