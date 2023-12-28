export function saveOnLocalStorage(newBoard,newTurn){
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
}

export function resetLocalStorage(){
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
}