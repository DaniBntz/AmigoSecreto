// Lista de amigos
let listaAmigos = [];

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    actualizarListaAmigos();
    input.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach((nombre) => {
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultado anterior

    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio];

    // Crear un nuevo elemento en la lista de resultado
    let mensaje = document.createElement("li");
    mensaje.textContent = `El amigo secreto es: ¡${amigoSorteado}!`;
    resultado.appendChild(mensaje);
}

// Configuración inicial
function condicionesIniciales() {
    asignarTextoElemento(".main-title", "¡Bienvenodo al Juego del Amigo Secreto!");
    asignarTextoElemento(".section-title", "Digita el nombre de tus amigos para empezar");
}

// Llamar a las condiciones iniciales
condicionesIniciales();
