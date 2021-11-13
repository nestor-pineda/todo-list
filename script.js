"use strict";

const input = document.querySelector("input"); // aquí introducimos la tarea
const addBtn = document.querySelector(".btn-add"); // hacemos click para añadirla a la lista
const ul = document.querySelector("ul"); // lugar donde se añadirá la tarea
const empty = document.querySelector(".empty"); // parrafo que se muestra cuando no hay tareas por hacer

// Añadimos un Event listener al botón de Añadir tareas
addBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Impide que se recargue la página

  const text = input.value; // Guarda el valor del input al hacer click en el botón en la variable "text"

  if (text !== "") {
    // se asegura de que el input tiene contenido
    const li = document.createElement("li"); // creamos un li con cada click
    const p = document.createElement("p"); // Creamos un p con cada click
    p.textContent = text; // asignamos a cada p el valor del input

    li.appendChild(p); // introducimos a cada li el p creado.
    li.appendChild(addDeleteBtn()); // agregamos el boton de eliminar al li
    ul.appendChild(li); // introducimos en la ul los li que se vayan creando

    input.value = ""; // cada vez que le damos a añadir, el valor del input se resetea
    empty.style.display = "none"; // Escondemos el texto de "No hay tareas pendientes" cada vez que asignemos una tarea a la lista
  }
});

function addDeleteBtn() {
  // Función que borra el li asignado a la ul del html
  const deleteBtn = document.createElement("button"); // creamos un boton

  deleteBtn.textContent = "X"; // asignamos el contenido del boton
  deleteBtn.className = "btn-delete"; // asignamos una clase al botón con lso estilos del css

  deleteBtn.addEventListener("click", (e) => {
    // añadimos un Event Listener al botón
    const item = e.target.parentElement; // variable que se refiere al elemento superior del boton
    ul.removeChild(item); // Eliminaremos cada li del ul
    // ahora comprobamos si quedan li en ul para enseñar el texto de "no quedan tareas"
    const items = document.querySelectorAll("li"); // Seleccionamos todos los li que se hayan asignado a la lista

    if (items.length === 0) {
      // comprueba que no queden li en el ul
      empty.style.display = "block"; // asigna display block al texto de "no quedan tareas"
    }
  });

  return deleteBtn; // devuelve el botn que hemos creado
}

// Creamos un Event Listener en el botón de añadir tareas "addBtn".

// Como el botón está dentro del "form" en el HTML, cada vez que hacemos click se recarga la página. Para evitar esto, en el Even Listener, lo primero que ponemos es un método "e.preventDefault()". Esto hace que no se recargue la página.

// Almacenamos el valor del input en una variable.

// Asignamso el input a un "p" y este lo introducimos en un "li", que a su vez lo metemos en el "ul" del HTML.

// Para evitar que se puedan añadir inputs sin texto, usamos un if != "" dentro del event listener del botón de añadri tareas a la lista.

// Creamos una función para crear un botón que eliminará cada elemento de la lista. Para especificar lo que queremos que elimine el botón, usaremos el método target y le añadiremos ".parenElement", que se refiere al padre del "li", osea el "ul". Para poder eliminar un objeto del DOM necesitamos acceder a él desde su elemento padre.

// Asignmos este botón a los li que se van creando.

// Para mostrar el texto de "No hay tareas pendientes" solo cuando no haya tareas en la lista, dentro de la función del delete button, introducimos un "if" statement que comprobara que tras eliminar el correspondeinte "li", no quede ninguno más. Si no queda ninguno más, asignaremos display block al texto.
