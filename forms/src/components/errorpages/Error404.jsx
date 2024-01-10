import './error404.css'



export function Error404() {
    return (
        <div className="container error">
            <h1>Error 404 - Página no encontrada</h1>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <p>Regresa a la <a href="/">página de inicio</a>.</p>
        </div>
    )
}