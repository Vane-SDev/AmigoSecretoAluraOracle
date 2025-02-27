// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para validar que el nombre sea válido
function validarNombre(nombre) {
    // Verificar que el nombre tenga al menos 2 caracteres
    if (nombre.length < 2) {
        return false;
    }

    // Verificar que todos los caracteres sean letras o espacios
    for (let i = 0; i < nombre.length; i++) {
        const char = nombre[i];
        // Permitir letras (mayúsculas y minúsculas), espacios y caracteres con acentos
        if (!(
            (char >= 'a' && char <= 'z') || // Letras minúsculas
            (char >= 'A' && char <= 'Z') || // Letras mayúsculas
            (char === ' ') || // Espacios
            (char === 'á' || char === 'é' || char === 'í' || char === 'ó' || char === 'ú') || // Vocales con acento (minúsculas)
            (char === 'Á' || char === 'É' || char === 'Í' || char === 'Ó' || char === 'Ú') || // Vocales con acento (mayúsculas)
            (char === 'ñ' || char === 'Ñ') // Letra "ñ"
        )) {
            return false;
        }
    }

    return true; // El nombre es válido
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim(); // Elimina espacios al inicio y al final

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Validar que el nombre sea válido
    if (!validarNombre(nombre)) {
        alert("Por favor, ingresa un nombre válido (mínimo 2 letras, sin números ni caracteres especiales).");
        return;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);

    // Actualizar la lista en el DOM
    const listaAmigos = document.getElementById('listaAmigos');
    const nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = nombre;
    listaAmigos.appendChild(nuevoAmigo);

    // Limpiar el input después de agregar
    input.value = "";
    document.getElementById("resultado").innerHTML = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length > 0) {
        // Seleccionar un nombre al azar del array
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        // Mostrar el resultado en el DOM
        resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
    } else {
        resultado.innerHTML = `<li>No hay amigos en la lista para sortear.</li>`;
    }
}