import React, { useState } from 'react'

function CrearTarea({onSubmit}) {
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [arrayObjetos, setArrayObjetos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoObjeto = { nombre, descripcion, openTask: true, susbtareas: [] };
        setArrayObjetos([...arrayObjetos, nuevoObjeto]);
        setNombre('');
        setDescripcion('');
        console.log(arrayObjetos)
    }

    return (


        <section
            className="flex-row justify-content-center align-items-center fixedBox"
            id="box-crearTarea"
        >
            <div
                className="d-flex flex-column"
                style={{ background: "#fff", padding: 40, borderRadius: 20, gap: 24 }}
            >
                <div>
                    <h1 className="titulo3">Creemos una tarea 🤯</h1>
                </div>
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-start" style={{ gap: 16 }}>
                    <div className="d-flex" style={{ gap: 8 }}>
                        <input
                            className="form-control inputStyle"
                            type="text"
                            placeholder="Ingresa el título"
                            value={nombre} onChange={e => setNombre(e.target.value)}
                        />
                        <input
                            className="form-control inputStyle"
                            type="text"
                            placeholder="Ingresa la descripción"
                            value={descripcion} onChange={e => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div className="d-flex" style={{ gap: 8 }}>
                        <button
                            className="btn btn-primary btn1"
                            id="crearTareaBtn"
                            type="submit"
                        >
                            Crear tarea
                        </button>
                        <button
                            className="btn btn-primary btn2"
                            id="cerrar-crearTarea"
                            type="button"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </section>



    )
}

export default CrearTarea
