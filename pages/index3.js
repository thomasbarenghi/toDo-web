import cookie from "js-cookie";

function MiPagina() {
    const miArrayDeObjetos = [{ "nombre": "objeto1" }, { "nombre": "objeto2" }];
    // Convertir el arreglo a una cadena JSON
    const arrayJson = JSON.stringify(miArrayDeObjetos);
    // Eliminar espacios y caracteres especiales de la cadena JSON

    // Establecer la cadena JSON en una cookie
    cookie.set("cookie", arrayJson);

    // Obtener el valor de la cookie
    const cookieValue = cookie.get("cookie");
    if (cookieValue) {
        const parsed = JSON.parse(cookieValue);
        console.log(parsed)
    } else {
        console.log("cookie vacía o no existe");
    }

    console.log(cookieValue)





    return (
        <div>
            <h1>Esta es mi página</h1>
        </div>
    )
}

export default MiPagina;
