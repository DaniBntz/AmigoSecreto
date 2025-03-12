let listaAmigos =  [];

function agregarAmigo () {
    let input = document.getElementById ("amigo");
    let nombre = input.value.trim();
    let lista = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert ("Por favor, ingresa un nombre válido.");
        return;
    }
}