![](todo-list.gif)
# Todo List
Proyecto: TODO list de Upgrade Hub

Creamos un Event Listener en el botón de añadir tareas "addBtn".

Como el botón está dentro del "form" en el HTML, cada vez que hacemos click se recarga la página. Para evitar esto, en el Even Listener, lo primero que ponemos es un método "e.preventDefault()". Esto hace que no se recargue la página.

Almacenamos el valor del input en una variable.

Asignamso el input a un "p" y este lo introducimos en un "li", que a su vez lo metemos en el "ul" del HTML.

Para evitar que se puedan añadir inputs sin texto, usamos un if != "" dentro del event listener del botón de añadri tareas a la lista.

Creamos una función para crear un botón que eliminará cada elemento de la lista. Para especificar lo que queremos que elimine el botón, usaremos el método target y le añadiremos ".parenElement", que se refiere al padre del "li", osea el "ul". Para poder eliminar un objeto del DOM necesitamos acceder a él desde su elemento padre.

Asignmos este botón a los li que se van creando.

Para mostrar el texto de "No hay tareas pendientes" solo cuando no haya tareas en la lista, dentro de la función del delete button, introducimos un "if" statement que comprobara que tras eliminar el correspondeinte "li", no quede ninguno más. Si no queda ninguno más, asignaremos display block al texto.
