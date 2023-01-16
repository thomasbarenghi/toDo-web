import { useEffect, useState } from "react"

function MyComponent() {
  const [ismodalPersonalizadoOpen, setIsmodalPersonalizadoOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the modalPersonalizado is open and the clicked target is not within the modalPersonalizado,
      // then close the modalPersonalizado
      if (ismodalPersonalizadoOpen && !e.target.classList.contains('modalPersonalizado')) {
        setIsmodalPersonalizadoOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [ismodalPersonalizadoOpen])

  return (
    <div className="wrapper">
      <button id="boton" className="button" onClick={() => setIsmodalPersonalizadoOpen(true)}>
        Abrir ventana modalPersonalizado
      </button>
      {ismodalPersonalizadoOpen && (
        <div className="modalPersonalizado">
          <h1>Contenido de la ventana modalPersonalizado</h1>
        </div>
      )}
      <div><h1>estoy fuera del componente</h1></div>  
    </div>
  )
}

export default MyComponent
