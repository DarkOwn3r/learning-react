import { useState } from 'react'
import './App.css'

const TURNS = {
  X: '×',
  O: 'o'
}

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`
  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  const [turn, setTurn] = useState(TURNS.X)
  //null means no winner, false means draw
  const [winner, setWinner] = useState(null)
  
  const checkWinner = (boardToCheck) => {
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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  // check if there are no more empty squares, if not then draw
  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
  }

  const updateBoard = (index) => {
    //don't update if already written
    if (board[index] || winner) return
    //update board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // check if there's a winner
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // draw
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
              {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false
                    ? 'Draw'
                    : 'Winner: '
                }
              </h2>
              <header className='win'>
                {
                  winner && <Square>{winner}</Square>
                }
              </header>
              <footer>
                <button onClick={resetGame}>Play again</button>
              </footer>
            </div>

          </section>
        )
      }
    </main>
  )
}

export default App
