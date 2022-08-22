import React from "react";
import "./startmodal.css";
const Startmodal = ({ playerSelected, setPlayer }) => {
  return (
    <div className="selectPlayer">
      <p>Choose Your Symbol</p>
      <div className="modalbtndiv">
        <button
          type="button"
          className="button-12"
          onClick={() => {
            setPlayer("O");
            playerSelected(true);
          }}
        >
          O
        </button>
        <button
          type="button"
          className="button-12"
          onClick={() => {
            setPlayer("X");
            playerSelected(true);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default Startmodal;
