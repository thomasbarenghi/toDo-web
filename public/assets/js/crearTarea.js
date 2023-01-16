var abrir = document.getElementById("abrir-crearTarea");
var cerrar = document.getElementById("cerrar-crearTarea");
var crearTarea = document.getElementById("box-crearTarea");
var configBox = document.getElementById("configBox-principal");
var configBoxOpen = document.getElementById("configBox-principal-open");
var configBoxOpenSub = document.getElementById("configBox-sub-open");
var configBoxSub = document.getElementById("configBox-sub");
var cerrarCrearSub = document.getElementById("cerrar-crearSubtarea");
var crearSubtarea = document.getElementById("box-crearSubtarea");
var abrirCrearSubTarea = document.getElementById("agregarSubtarea-btn");
var crearSubtareaBtn = document.getElementById("crearSubtareaBtn");
var crearTareaBtn = document.getElementById("crearTareaBtn");
var borrarSubtareaBtn = document.getElementById("borrarSubtarea-btn");
var borrarTareaBtn = document.getElementById("borrarTareaBtn");

//Crear tarea


//Abrimos el panel de creacion y cerramos la box
abrir.addEventListener("click", function () {
    crearTarea.style.display = "flex";
 
})

cerrar.addEventListener("click", function () {
    crearTarea.style.display = "none"
})

//Dps de borrar la tarea se cierra box
borrarTareaBtn.addEventListener("click", function () {
    configBox.style.display = "none"
})


