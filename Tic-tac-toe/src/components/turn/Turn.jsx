import { TURNS } from "../../constants";
import { Square } from "../square/Square";

export function Turn(turn) {
    return (
        <section className='turn'>
            <h2>Turno:</h2>
            <Square
                isSelected={turn === TURNS.x}
            >
                {TURNS.x}
            </Square>

            <Square
                isSelected={turn === TURNS.o}
            >
                {TURNS.o}
            </Square>
        </section>
    )
}

