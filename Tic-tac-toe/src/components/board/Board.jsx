import { updateBoard } from "../../logic/board"
import { Square } from "../square/Square"
import { Turn } from "../turn/Turn"
import { WinnerModal } from "../winnerModal/WinnerModal"

export function Board({turn, winner, resetGame, board, setBoard, setTurn, setWinner}) {
    return (
        <main className='board'>
            <h1>Tic tac toe</h1>
            <button onClick={resetGame}>Reset del juego</button>
            <section className='game'>
                {
                board && board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={(index) => updateBoard(index, board, winner, turn, setBoard, setTurn, setWinner)}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>

            <Turn turn={turn} />
            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )
}