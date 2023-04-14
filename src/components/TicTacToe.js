import { useState } from "react";
import Cell from "./Cell";

function TicTacToe() {
  const [turn, setTurn] = useState("O");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState("");

  const handleClick = (num) => {
    const newCells = [...cells];
    if (newCells[num] !== "") {
      alert("Already occupied !!");
      return false;
    }

    if (winner !== "") {
      alert("Game ended. Please restart !!");
      return false;
    }

    if (turn === "O") {
      setTurn("X");
      newCells[num] = "X";
    } else {
      setTurn("O");
      newCells[num] = "O";
    }

    checkWinner(newCells);
    setCells(newCells);
  };

  const checkWinner = (newCells) => {
    const winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningPositions.forEach((positionSet) => {
      if (
        newCells[positionSet[0]] === "O" &&
        newCells[positionSet[1]] === "O" &&
        newCells[positionSet[2]] === "O"
      ) {
        setWinner("O");
        return;
      }

      if (
        newCells[positionSet[0]] === "X" &&
        newCells[positionSet[1]] === "X" &&
        newCells[positionSet[2]] === "X"
      ) {
        setWinner("X");
        return;
      }
    });
  };

  const restartGame = () => {
    setWinner("");
    setCells(Array(9).fill(""));
  };

  return (
    <div className="w-1/4 mx-auto my-10">
      <h1 className="text-4xl text-center mb-10">Tic-Tac-Toe</h1>
      <div className="text-xl mb-4 text-center">Next Turn: {turn}</div>
      <div className="board flex justify-content-between flex-wrap">
        <Cell
          num={0}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={1}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={2}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={3}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={4}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={5}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={6}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={7}
          cells={cells}
          handleClick={handleClick}
        />
        <Cell
          num={8}
          cells={cells}
          handleClick={handleClick}
        />
      </div>

      {winner && (
        <div className="mt-5 text-center">
          <div className="text-green-600 font-bold text-2xl">
            Winner: {winner}
          </div>
          <br />
          <button
            className="px-3 py-2 bg-gray-500 text-white"
            onClick={restartGame}
          >
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
}

export default TicTacToe;
