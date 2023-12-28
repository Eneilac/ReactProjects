import { useState } from 'react';
import './App.css';
import { TURNS } from './constants';
import { resetLocalStorage } from './storage/storage';
import { Board } from './components/board/Board';

function App() {

  //Estados

  const [board, setBoard] = useState(() => {
    //Inicializamos el estado del tablero con el contenido del local storage en caso de tener algo si no
    //inicializamos el tablero con los valores por defecto
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  });

  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return turnFromLocalStorage ?? TURNS.x //comprobamos si la primera variable es null o undefined ( no es como la condicion or que comprueba si la variable es false)

  });
  const [winner, setWinner] = useState(null); //null --> no hay ganador || false --> empate


  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.x);
    setWinner(null)
    resetLocalStorage()
  }

  return (
    <Board
      turn={turn}
      winner={winner}
      resetGame={resetGame}
      board={board}
      setBoard={setBoard}
      setTurn={setTurn}
      setWinner={setWinner}
    />
  );
}

export default App;
