/*
ESTO ES UN EJEMPLO DE COMO LLAMAR A UN EVENTO EJEMPLO DEL EJERCICIO ANTERIOR

var element = document.querySelector(".form-signup");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});

*/

var eventoBoton = document.getElementById("boton");
	eventoBoton.addEventListener("click", agregarLista);

var spanTrash = document.getElementsByTagName("span");

function agregarLista(e){
	var textoArea = document.getElementById("textoArea").value;

	if ( textoArea == 0 ){

		alert("ingresa un texto");
		console.log("no agrego texto");
		return false;

	}else{
		
		var	textoArea = document.createTextNode(textoArea);
		var listaUl = document.getElementById("listaUl");
		var lista = document.createElement("li");
		lista.classList.add("bg-primary");
		var check = document.createElement("input");
		check.setAttribute("type","checkbox");
		var spanTrash = document.createElement("span");
		spanTrash.classList.add("fa","fa-trash");
		lista.appendChild(check);
		lista.appendChild(textoArea);
		lista.appendChild(spanTrash);
		listaUl.appendChild(lista);

		spanTrash.onclick = function (){
		listaUl.removeChild(lista);
		};
		check.onclick = function(){
			listaUl.classList.toggle("delineado");
		};

	document.getElementById("textoArea").value = "";

	}

};




