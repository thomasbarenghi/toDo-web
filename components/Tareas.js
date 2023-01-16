import { useState, useEffect } from 'react';

const Tareas = ({ objetos, onDeleteSubtarea, onChangeOpenTask, onDelete, descripcionSubtarea, setDescripcionSubtarea, handleAddAndSubmitSubtarea }) => {
    const [showCreateSubtareaBox, setShowCreateSubtareaBox] = useState(false);
    const [inputStates, setInputStates] = useState([]);

    const [isSubtareaOpen, setIsSubtareaOpen] = useState(false);


    const [configBoxOpenState, setConfigBoxOpenState] = useState({});
    function handleOpenConfigBox(index) {
        setConfigBoxOpenState(prevState => {
            return { ...prevState, [index]: !prevState[index] }
        });
    }



    const [configBoxSubOpenState, setConfigBoxSubOpenState] = useState({});
    function handleOpenConfigBoxSub(tareaIndex, subtareaIndex) {
        setConfigBoxSubOpenState(prevState => {
            const newState = { ...prevState };
            const key = `${tareaIndex}-${subtareaIndex}`;
            newState[key] = !prevState[key];
            return newState;
        });
    }




    return (
        <div className="d-flex flex-column" style={{ gap: 40 }}>
            {objetos.map((objeto, index) => (
                <>


                    <div
                        key={objeto.index}
                        className="d-flex flex-column"
                        id="contenedorDeTareas"
                        style={{ gap: 40 }}
                    >
                        <div
                            id="tareaPrincipal"
                            style={{ padding: 40, background: "#fff", borderRadius: 20 }}
                        >
                            <div
                                className="d-flex flex-row justify-content-between align-items-start"
                                style={{ position: "relative" }}
                            >
                                <div className="d-flex" style={{ gap: 16 }}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input checkbox1"
                                        defaultChecked=""
                                    />
                                    <div>
                                        <h1 id="tituloTarea" className="titulo3">
                                            {objeto.nombre}
                                            <br />
                                        </h1>
                                        <p id="descripcionTarea" className="bodyRegular">
                                            {objeto.descripcion}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="btn btn-primary"
                                    id="configBox-principal-open"
                                    type="button"
                                    onClick={() => handleOpenConfigBox(index)}
                                    style={{
                                        padding: 0,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        fontFamily: '"outfit", sans-serif',
                                        minWidth: "fit-content",
                                        background: "#fff",
                                        borderRadius: 10,
                                        borderStyle: "none",
                                        color: "var(--color-primary-800)"
                                    }}
                                >
                                    <img
                                        src="assets/img/fi-br-menu-dots.svg"
                                        style={{ height: 20, width: 20 }}
                                    />
                                </button>
                                <div
                                    className="flex-column configBox"
                                    id={`configBox-principal-${index}`}
                                    style={{ right: 0, top: 36, display: configBoxOpenState[index] ? 'flex' : 'none' }}
                                >
                                    <button
                                        className="btn btn-primary d-flex btn3"
                                        id="agregarSubtarea-btn"
                                        type="button"

                                       
                                    onClick={() => {
                                        setShowCreateSubtareaBox(!showCreateSubtareaBox);
                                        setConfigBoxOpenState((prevState) => {
                                            // Invertir el valor actual de la config box específica que deseas cerrar
                                            return { ...prevState, [index]: !prevState[index] }
                                        });
                                    }}
                                    style={{ color: "var(--color-primary-800)" }}
                                    >
                                    <img
                                        style={{ width: 14, height: 14 }}
                                        src="assets/img/fi-br-plus.svg"
                                    />
                                    Agregar Subtarea
                                </button>
                                <button
                                    className="btn btn-primary d-flex btn3"
                                    id="borrarTareaBtn"
                                    type="button"
                                    style={{ color: "rgb(222,5,5)" }}
                                    onClick={() => onDelete(index)}
                                >
                                    <img
                                        src="assets/img/fi-br-cross.png"
                                        style={{ width: 14, height: 14 }}
                                    />
                                    Borrar tarea
                                </button>
                            </div>
                        </div>



                        <div id="contenedorSubtareas" style={{ paddingLeft: 50 }}>
                            <h1
                                className="bodyRegular16"
                                style={{ fontWeight: 600, marginBottom: 15 }}
                            >
                                Subtareas
                            </h1>
                            <div style={{ display: "flex", gap: 16, flexDirection: "column" }}>



                                {objeto.subtareas && objeto.subtareas.map((subtarea, i) => (
                                    <div
                                        className="d-flex justify-content-between align-items-start"
                                        id="itemSubtarea"
                                        style={{ position: "relative" }}
                                    >
                                        <div className="d-flex" style={{ gap: 8 }}>
                                            <input
                                                type="checkbox"
                                                className="form-check-input checkbox2"
                                                defaultChecked=""
                                            />
                                            <div style={{ marginBottom: "0px !important" }}>
                                                <h1 id="tituloSubtarea" className="bodyRegular16">
                                                    {subtarea.descripcion}
                                                    <br />
                                                </h1>
                                                <p id="descripcionSubtarea" className="bodyRegular">
                                                    Soy la descripción de esta tarea
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-primary"
                                            id={`configBox-sub-open-${i}`}
                                            onClick={() => handleOpenConfigBoxSub(index, i)}
                                            type="button"
                                            style={{
                                                padding: 0,
                                                fontSize: 14,
                                                fontWeight: 600,
                                                fontFamily: '"outfit", sans-serif',
                                                minWidth: "fit-content",
                                                background: "#fff",
                                                borderRadius: 10,
                                                borderStyle: "none",
                                                color: "var(--color-primary-800)"
                                            }}
                                        >
                                            <img
                                                src="assets/img/fi-br-menu-dots.svg"
                                                style={{ height: 20, width: 20 }}
                                            />
                                        </button>
                                        <div
                                            className="flex-column configBox"
                                            id={`configBox-sub-${i}`}
                                            style={{ right: 0, top: 36, display: configBoxSubOpenState[`${index}-${i}`] ? 'flex' : 'none' }}
                                        >
                                            <button
                                                className="btn btn-primary d-flex btn3"
                                                id="borrarSubtarea-btn"
                                                type="button"
                                                style={{ color: "rgb(222,5,5)" }}
                                                onClick={() => onDeleteSubtarea(index, i)}
                                            >
                                                <img
                                                    src="assets/img/fi-br-cross.png"
                                                    style={{ width: 14, height: 14 }}
                                                />
                                                Borrar subtarea
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div
                            id="box-crearSubtarea"
                            className="justify-content-center align-items-center fixedBox"
                            style={{ display: showCreateSubtareaBox ? 'flex' : 'none' }}
                        >
                            <div>
                                <div
                                    className="d-flex flex-column"
                                    style={{ background: "#fff", padding: 40, borderRadius: 20, gap: 16 }}
                                >
                                    <div>
                                        <h1 className="titulo3">Creemos una subtarea 🤯</h1>
                                    </div>
                                    <form onSubmit={(e) => handleAddAndSubmitSubtarea(e, index)}
                                        className="d-flex flex-column align-items-start"
                                        style={{ gap: 16, marginBottom: 30 }}
                                    >
                                        <div className="d-flex" style={{ gap: 8 }}>
                                            <input
                                                className="inputStyle"
                                                type="text"
                                                placeholder="Ingresa el título"
                                            />
                                            <input
                                                className="inputStyle"
                                                type="text"
                                                placeholder="Ingresa la descripción"
                                                name="descripcion" value={descripcionSubtarea}
                                                onChange={e => setDescripcionSubtarea(e.target.value)}
                                            />
                                        </div>
                                        <div className="d-flex" style={{ gap: 8 }}>
                                            <button
                                                id="crearSubtareaBtn"
                                                className="btn btn-primary btn1"
                                                type="submit"
                                                onClick={() => setShowCreateSubtareaBox(false)}
                                            >
                                                Crear subtarea
                                            </button>
                                            <button
                                                id="cerrar-crearSubtarea"
                                                onClick={() => setShowCreateSubtareaBox(false)}
                                                className="btn btn-primary btn2"
                                                type="button"
                                            >
                                                Cancelar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                </>
    ))
}
        </div >
    )
}

export default Tareas;
