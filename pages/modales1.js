import { useEffect, useRef, useState } from "react"

function MyComponent() {
  const ref = useRef()

  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = e => {
      // If the modal is open and the clicked target is not within the modal,
      // then close the modal
      if (isModalOpen && ref.current && !ref.current.contains(e.target)) {
        setIsModalOpen(false)
        console.log("hola")
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isModalOpen])

  return (
    <div className="wrapper">
      <button id="boton" className="button" onClick={() => setIsModalOpen(true)}>
        Abrir ventana modal
      </button>
      {isModalOpen && (
    <ul className="list" ref={ref}>
          <li className="list-item">dropdown option 1</li>
          <li className="list-item">dropdown option 2</li>
          <li className="list-item">dropdown option 3</li>
          <li className="list-item">dropdown option 4</li>
        </ul>
      )}
<div><h1>estoy fuera del componente</h1></div>  

    </div>
  )
}

export default MyComponent
