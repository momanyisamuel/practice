import React, { useEffect } from "react";
import "./Toggle.css";

const Toggle = () => {
  const toggle = document.querySelector("[aria-pressed]");

  const press = () => {
    toggle.addEventListener("click", (e) => {
      console.log("pressed");
      let pressed = e.target.getAttribute("aria-pressed") === "true";
      e.target.setAttribute("aria-pressed", String(!pressed));
    });
  };

  useEffect(() => {
    try {
      press();
    } catch (error) {
      console.log(error);
    }
  }, [press]);

  return (
    <>
      <button type="button" aria-pressed="true">
        Notify by email
      </button>
    </>
  );
};

export default Toggle;
