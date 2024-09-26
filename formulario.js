var formulario = document.querySelector("#form"); //se corrigio en html
formulario.onsubmit = function (e) {

  e.preventDefault(); //corección del método

  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  //validación entradas
  if (nombre.length === 0) {
    n.classList.add("error")
    return; //para si hay error
  } else {
    n.classList.remove("error");

  }//else
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
    return; //para si hay error
  } else {
    e.classList.remove("error");
  }//else agregado

  if (nombre.length > 0 && (edad > 18 && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad)
  }//if
}//function

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {


  var nacionalidades = { //simplificación
    ar: "Argentina",
    mx: "Mexicana",
    vnzl: "Venezolana",
    per: "Peruana"
  };//var

  nacionalidad = nacionalidades[nacionalidad]||nacionalidad;

  var lista = document.querySelector(".lista-de-invitados");

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span")
    var inputNombre = document.createElement("input")
    var espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }//crearElemento

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)


  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado";
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function () {
    elementoLista.remove();//elimina el elemento de la lista 
  }//onclick
}//agregarInvitado