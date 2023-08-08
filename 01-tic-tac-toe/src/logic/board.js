import { WINNER_COMBOS } from "../constants.js"

export const checkWinner = (boardToCheck) => {
    // check all the combos to see who wins
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo
      if (
        boardToCheck[a] && // 0 -> to be × or o
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a] // winner × or o
      }
    }
    // if there's no winner
    return null
  }

  // check if there are no more empty squares, if not then draw
  export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }