import { useState } from "react";

type Attributes = { [key: string]: { [key: string]: number[] } };
type Values = { [key: string]: string };

export const FunTest = () => {
  //ticTacToe***********************************************************************************
  const [ticTacToeString, setTicTacToeString] = useState<string>("");
  const [ticTacToeResult, setTicTacToeResult] = useState<number[]>([0, 0]);

  const isSolution = (arr: string[], symbol: string, poz: number) => {
    //add symbol and try for 8 possible solutions
    let replaced = arr[poz];
    arr[poz] = symbol;
    const solutions = [
      [0, 4, 8],
      [2, 4, 6],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < solutions.length; i++) {
      if (
        arr[solutions[i][0]] === symbol &&
        arr[solutions[i][1]] === symbol &&
        arr[solutions[i][2]] === symbol
      ) {
        console.log("ce");
        arr[poz] = replaced;
        return true;
      }
    }
    arr[poz] = replaced;
    return false;
  };

  const handleTicTacToe = () => {
    //parsing ticTacToeString
    let TTTArray = [];

    for (let i = 0; i < ticTacToeString.length; i++) {
      if (i <= 2 || (i >= 5 && i <= 7) || i >= 10) {
        TTTArray.push(ticTacToeString[i]);
      }
    }
    console.log(TTTArray);

    //calculate X solutions
    let nrSolutionsForX = 0;
    for (let i = 0; i < TTTArray.length; i++) {
      if (
        TTTArray[i] !== "X" &&
        TTTArray[i] !== "O" &&
        isSolution(TTTArray, "X", i)
      ) {
        nrSolutionsForX++;
      }
    }

    //calculate O solutions
    let nrSolutionsForO = 0;
    for (let i = 0; i < TTTArray.length; i++) {
      if (
        TTTArray[i] !== "O" &&
        TTTArray[i] !== "X" &&
        isSolution(TTTArray, "O", i)
      ) {
        nrSolutionsForO++;
      }
    }

    setTicTacToeResult([nrSolutionsForX, nrSolutionsForO]);
    console.log([nrSolutionsForX, nrSolutionsForO]);
  };

  //Place Dominos***************************************************************

  const greatestCommonFactor = (a: number, b: number) => {
    while (b !== 0) {
      let r = a % b;
      a = b;
      b = r;
    }

    return a;
  };

  const placeDominos = (L: number, D: number, A: number[]) => {
    let distanceWithFewestMoves = -1;
    let biggestNrOfSteps = Infinity;

    /*the distance with the fewest moves should be the biggest number in the array A;
         but we also need to take into account the greatest common factor of A[i]  
         and the initial arrangement (pieces already in place)*/
    for (let i = 0; i < A.length; i++) {
      let steps = L / A[i] + 1 - greatestCommonFactor(A[i], D);
      if (steps < biggestNrOfSteps) {
        biggestNrOfSteps = steps;
        distanceWithFewestMoves = A[i];
      }
    }

    return distanceWithFewestMoves;
  };

  console.log(placeDominos(100, 25, [15, 50]));

  //Inventory*******************************************************************
  const checkInventory = (I: Attributes, R: Values) => {
    const filteredInventory = Object.keys(I).filter((o: any) =>
      Object.keys(R).every((k) => R[k] === o[k])
    );

    console.log(filteredInventory);
  };

  let I = {
    color: {
      blue: [123, 456, 789],
      red: [234, 567, 890],
    },
    size: {
      small: [123, 234],
      medium: [456, 789],
      large: [567, 890],
    },
  };

  let R = { color: "red ", size: "small " };

  checkInventory(I, R);

  return (
    <>
      {/*TicTacToe*********************************************************/}
      <h2>Tic-Tac-Toe</h2>
      <input
        value={ticTacToeString}
        onChange={(e) => {
          setTicTacToeString(e.target.value);
        }}
      />
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setTicTacToeString("X X\\n OO\\nXOO")}
      >
        Use Test string
      </button>
      <button style={{ marginLeft: "5px" }} onClick={handleTicTacToe}>
        Display Array
      </button>
      <br />[{ticTacToeResult[0]} ; {ticTacToeResult[1]}]
    </>
  );
};
