import confetti from "canvas-confetti";
import { TURNS, WINNER_COMBOS } from "../constants";
import { saveOnLocalStorage } from "../storage/storage";

/**
 * revisamos todas las combinaciones
 * ganadoras para ver si hay un ganador
 * @param {*} boardToCheck 
 * @returns 
 */
export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo

        if (boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a] //retorna x u o segun quien sea el ganador
        }
    }
    //si no hay ganador
    return null
}

/**
 *  Para revisar el final del juego, miraremos que
 *  no haya ninguna de las casillas a nulo
 * @param {*} newBoard 
 * @returns 
 */
export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}

/**
 * Esta funcion,se encarga de ir actualizando el estado de cada casilla en cada movimiento
 * tambien se encarga de ir actualizando los turnos y de comprobar
 * si hay algun ganador
 * @param {*} index 
 * @param {*} board 
 * @param {*} winner 
 * @param {*} turn 
 * @param {*} setBoard 
 * @param {*} setTurn 
 * @param {*} setWinner 
 * @returns 
 */
export const updateBoard = (index, board, winner, turn, setBoard, setTurn, setWinner) => {
    //si las casilla ya contiene algo evitamos que pueda sobreescribir el contenido de esta
    if (board[index] || winner) return
    //hacemos una copia del array board ya que no es recomendable mutar las props de un componente, se actualzan con el estado
    const newBoard = [...board]
    //asignamos turn a la casilla, osea x u o 
    newBoard[index] = turn
    setBoard(newBoard)

    /**cambiamos de turno*/
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)

    saveOnLocalStorage(newBoard, newTurn)
    /**Comprobamos si hay un ganador */
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
        confetti();
        setWinner(newWinner)
    } else if (checkEndGame(newBoard)) { //empate
        setWinner(false)
    }
}






