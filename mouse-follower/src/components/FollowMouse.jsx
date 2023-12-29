import { useEffect, useState } from 'react'
import './followMouse.css'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(true) //estado para el botón
  const [position, setPosition] = useState({ x: 0, y: 0 }) //cordenadas del cursor

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    //Limpia el efecto siempre que se desmonte el componente o cambie el estado de la dependencia
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  //cuando en el stado esta true quitamos el cursor con una clase css
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    //Limpiamos el efecto
    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        transform: `translate(${position.x}px, ${position.y}px)` //solo damos este estilo en linea ya que necesitamos las cordenadas
      }}
        className='bolita' />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir raton
      </button>
    </main>
  )
}
