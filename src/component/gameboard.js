import React, { useState } from "react";

const GameBoard = ({ player, setPlayer, playerSelected }) => {
  const gameArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [game, setGame] = useState(gameArray);
  const [winner, setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const checkTie = (gamearr) => {
    return !gamearr.some((index) => {
      return index === gameArray[index - 1];
    });
  };
  const checkWinner = (gamearr, player) => {
    return WINNING_COMBINATIONS.some((combination) => {
      return combination.every((index) => {
        // console.log(gamearr[index] === player);
        return gamearr[index] === player;
      });
    });
  };

  const handleMove = (e) => {
    if (e.currentTarget.innerHTML === "") {
      if (player === "O") {
        e.currentTarget.innerHTML = "O";
        game[e.currentTarget.id - 1] = "O";
        console.log(game);
        console.log(checkWinner(game, player));
        if (checkWinner(game, player)) {
          setWinner(player);
          setGameOver(true);
        } else if (checkTie(game)) {
          setWinner("no one");
          setGameOver(true);
        } else {
          setPlayer("X");
        }
      } else {
        e.currentTarget.innerHTML = "X";
        game[e.currentTarget.id - 1] = "X";
        console.log(game);
        console.log(checkWinner(game, player));
        if (checkWinner(game, player)) {
          setWinner(player);
          setGameOver(true);
        } else if (checkTie(game)) {
          setWinner("no one");
          setGameOver(true);
        } else {
          setPlayer("O");
        }
      }
    }
  };
  const GameOver = ({ winner }) => {
    return (
      <div className="gameOver">
        <p>The winner is {winner}</p>
        <button type="button" onClick={() => playerSelected(false)}>
          Start Over
        </button>
      </div>
    );
  };
  return (
    <>
      {gameOver ? (
        <GameOver winner={winner} />
      ) : (
        <section className="game">
          <div className="gridbox" onClick={handleMove} id={1}></div>
          <div className="gridbox" onClick={handleMove} id={2}></div>
          <div className="gridbox" onClick={handleMove} id={3}></div>
          <div className="gridbox" onClick={handleMove} id={4}></div>
          <div className="gridbox" onClick={handleMove} id={5}></div>
          <div className="gridbox" onClick={handleMove} id={6}></div>
          <div className="gridbox" onClick={handleMove} id={7}></div>
          <div className="gridbox" onClick={handleMove} id={8}></div>
          <div className="gridbox" onClick={handleMove} id={9}></div>
        </section>
      )}
    </>
  );
};

export default GameBoard;
