import { useState, useEffect } from 'react';

const Tareas = ({ objetos, onDeleteSubtarea, onChangeOpenTask, onDelete, descripcionSubtarea, setDescripcionSubtarea, handleAddAndSubmitSubtarea }) => {
   
    const [inputStates, setInputStates] = useState([]);

    // Inicializar el estado del input para cada objeto
    useEffect(() => {
        setInputStates(objetos.map(() => ''));
    }, [objetos]);
   
    return (
        <div>
            {objetos.map((objeto, index) => (
                <div key={index}>
                    <h3>{objeto.nombre}</h3>
                    <p>{objeto.descripcion}</p>
                    <button onClick={() => onChangeOpenTask(index)}>
                        {objeto.openTask ? "Cerrar Tarea" : "Abrir Tarea"}
                    </button>
                    <button onClick={() => onDelete(index)}>Eliminar</button>
                    {objeto.subtareas && objeto.subtareas.map((subtarea, i) => (
                        <div key={i}>
                            <p>{subtarea.descripcion}</p>
                            <button onClick={() => onDeleteSubtarea(index, i)}>Borrar subtarea</button>
                        </div>
                    ))}
                    <form onSubmit={(e) => handleAddAndSubmitSubtarea(e, index)}>
                        <label>
                            Descripcion:
                            <input type="text" name="descripcion" value={descripcionSubtarea} onChange={e => setDescripcionSubtarea(e.target.value)} />
                        </label>
                        <button type="submit">Agregar subtarea</button>
                    </form>
                </div>
            ))}
        </div>
    )
}

export default Tareas;
