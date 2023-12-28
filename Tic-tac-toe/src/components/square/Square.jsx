export const Square = ({ children, isSelected, updateBoard, index }) => {

    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }


    return (
        <div onClick={handleClick}
            className={className}
        >
            {children  /*renderiza el contenido hijo del div square*/}
        </div>
    )
}