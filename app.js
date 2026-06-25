function login() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (
        usuario === CONFIG.usuario &&
        password === CONFIG.password
    ) {

        localStorage.setItem(
            "nombreUsuario",
            CONFIG.nombre
        );

        localStorage.setItem(
            "premioUsuario",
            CONFIG.premio
        );

        window.location.href = "premio.html";

    } else {

        alert(
            "Usuario o contraseña incorrectos"
        );

    }

}

if (document.getElementById("nombre")) {

    document.getElementById("nombre").innerText =
        localStorage.getItem("nombreUsuario");

}

if (document.getElementById("premio")) {

    document.getElementById("premio").innerText =
        localStorage.getItem("premioUsuario");

}// --- CONFIGURACIÓN DE LA FECHA DEL SORTEO ---
// Define aquí la fecha exacta del próximo sorteo (Año, Mes [0-11], Día, Hora, Minutos)
// Nota: En JavaScript los meses van de 0 (Enero) a 11 (Diciembre). Mayo es 4.
const fechaSorteo = new Date(2026, 2, 1, 11, 59, 59).getTime(); 

function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaSorteo - ahora;

    // Si el tiempo ya expiró
    if (distancia < 0) {
        const contadorElemento = document.getElementById('contador');
        if (contadorElemento) {
            contadorElemento.innerHTML = "<div style='color: #ff4d4d; font-weight: bold; width: 100%; text-align: center;'>¡EL SORTEO ESTÁ EN CURSO!</div>";
        }
        clearInterval(intervalo);
        return;
    }

    // Cálculos matemáticos para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Formatear los números para que siempre tengan dos dígitos (ej: "02" en vez de "2")
    const formatoDias = dias < 10 ? '0' + dias : dias;
    const formatoHoras = horas < 10 ? '0' + horas : horas;
    const formatoMinutos = minutos < 10 ? '0' + minutos : minutos;
    const formatoSegundos = segundos < 10 ? '0' + segundos : segundos;

    // Inyectar el HTML con la estructura exacta de rejilla y líneas divisorias de tus estilos CSS
    const contenedor = document.getElementById('contador');
    if (contenedor) {
        contenedor.innerHTML = `
            <div class="tiempo-item">
                <span class="numero">${formatoDias}</span>
                <span class="etiqueta">DÍAS</span>
            </div>
            <div class="linea-divisoria"></div>
            <div class="tiempo-item">
                <span class="numero">${formatoHoras}</span>
                <span class="etiqueta">HORAS</span>
            </div>
            <div class="linea-divisoria"></div>
            <div class="tiempo-item">
                <span class="numero">${formatoMinutos}</span>
                <span class="etiqueta">MINUTOS</span>
            </div>
            <div class="linea-divisoria"></div>
            <div class="tiempo-item">
                <span class="numero">${formatoSegundos}</span>
                <span class="etiqueta">SEGUNDOS</span>
            </div>
        `;
    }
}

// Ejecutar la función inmediatamente al cargar la página
actualizarContador();

// Configurar el intervalo para que se ejecute y actualice la pantalla CADA 1 SEGUNDO (1000 milisegundos)
const intervalo = setInterval(actualizarContador, 1000);
