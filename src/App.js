import React, { useState } from "react";
import Startmodal from "./component/startmodal";
import GameBoard from "./component/gameboard";
import "./App.css";

function App() {
  const [move, setMove] = useState("");
  const [player, setPlayer] = useState("");

  const [playerSelected, setPlayerSelected] = useState(false);

  return (
    <>
      {!playerSelected ? (
        <Startmodal playerSelected={setPlayerSelected} setPlayer={setPlayer} />
      ) : (
        <GameBoard
          setPlayer={setPlayer}
          player={player}
          playerSelected={setPlayerSelected}
        />
      )}
    </>
  );
}

export default App;
