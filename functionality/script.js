// Establece la fecha objetivo (puedes cambiar la fecha a la que quieras contar hacia atrás)
const fechaObjetivo = new Date("2025-05-25T18:00:00").getTime();

// Actualiza el contador cada 1 segundo
const intervalo = setInterval(function() {
    // Obtiene la fecha y hora actuales
    const ahora = new Date().getTime();

    // Calcula la diferencia entre la fecha objetivo y la fecha actual
    const distancia = fechaObjetivo - ahora;

    // Calcula los días, horas, minutos y segundos restantes
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Muestra los resultados en los elementos HTML
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Si la fecha ha pasado, muestra "EXPIRED"
    if (distancia < 0) {
        clearInterval(intervalo);  // Detiene el contador
        document.getElementById("contador").innerHTML = "¡La fecha ha llegado!";
    }
}, 1000);


function abrirModal() {
    document.getElementById('modalIdFormulary').style.display = 'flex';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modalIdFormulary').style.display = 'none';
}