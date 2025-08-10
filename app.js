// El principal objetivo de este desafío es fortalecer 
// tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

//arreglo para almacenar los nombres de los amigos
let amigos=[];
// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto){
// Selecciona el elemento del DOM según el selector
    let elementoHTML = document.querySelector(elemento);
// Cambia el contenido de texto del elemento
    elementoHTML.innerHTML = texto;
    return;
}

// Función para agregar un amigo a la lista
function agregarAmigo(){
// Captura el valor del input con id="amigo"
    let nombre = document.querySelector("#amigo").value;
// Verifica que el campo no esté vacío
    if (nombre === "") {
// Muestra alerta si está vacío
    alert("Por favor escribe un nombre válido.");
    }
// Agrega el nombre al array global
    amigos.push(nombre); 
// Muestra en consola la lista actualizada de amigos
    console.log(amigos);
// Limpia el input
    document.querySelector("#amigo").value = ""; 
//  Actualiza la lista visible
    actualizarListaAmigos(); 
    return;
}
// Función para mostrar en pantalla la lista de amigos
function actualizarListaAmigos() {
// Obtiene la referencia a la lista en el HTML
    let listaAmigos = document.getElementById("listaAmigos");
// Limpia cualquier contenido previo en la lista
    listaAmigos.innerHTML = "";
// Recorre el arreglo de amigos   
    amigos.forEach(function(amigo) {
// Crea un nuevo elemento de lista <li>
    let li = document.createElement("li");
// Asigna el nombre del amigo como texto del <li>
    li.textContent = amigo;
// Agrega el <li> al elemento de lista en el DOM
    listaAmigos.appendChild(li);
    });
}
// Función para sortear un amigo al azar
function sortearAmigo(){
// Verifica que haya al menos un amigo en la lista
    if (amigos.length === 0) {
// Muestra alerta si la lista está vacía
    alert("No hay amigos para sortear.");
    return;
    }

// Generar un nombre aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
// Obtener el nombre en esa posición
    let ganador = amigos[indiceAleatorio];
    
// Muestra al amigo ganador
    asignarTextoElemento('h2', `🎊🎉El ganador es: ${ganador}🎉🎊`);
// Vacía la lista de amigos
    amigos = [];
// Actualiza la lista en pantalla para reflejar que está vacía
    actualizarListaAmigos();
}
// Establece el texto inicial en el <h2> al cargar la página
asignarTextoElemento('h2','Digite el nombre de sus amigos');