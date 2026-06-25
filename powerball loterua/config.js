document.getElementById('loginForm').addEventListener('submit', function(e) {
    // Doble seguridad para evitar que la página se rompa
    e.preventDefault(); 
    
    const usuario = document.getElementById('username').value;
    const contrasena = document.getElementById('password').value;

    // Aquí puedes poner el usuario y contraseña que tú quieras de prueba:
    if (usuario === "juan" && contrasena === "1234") {
        alert("¡Bienvenido Juan!");
        window.location.href = "premio.html"; // Te manda a la pantalla que arreglamos antes
    } else {
        alert("Usuario o contraseña incorrectos. (Prueba con juan y 1234)");
    }
});