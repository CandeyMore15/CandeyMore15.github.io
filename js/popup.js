window.addEventListener("load", function () {
  console.log("Hola mundo");
});

//*************************************************************
function mostrarPopup(nombre) {
  var imagenFlor = document.getElementById(nombre);

  imagenFlor.classList.remove("no-mostrar");
  imagenFlor.classList.add("mostrar");
  console.log("apareci");
}

function cerrarPopup(nombre) {
  var segundo = document.getElementById(nombre);

  segundo.classList.remove("mostrar");
  segundo.classList.add("no-mostrar");
  console.log("apareci");
}
//************************************************************
