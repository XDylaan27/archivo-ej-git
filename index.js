// Función para el primer botón
document.getElementById('miBoton').addEventListener('click', function() {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '¡Funcionó! Has interactuado con JavaScript 🎉';
    mensaje.className = 'success';
    
    // Efecto de animación
    mensaje.style.opacity = '0';
    setTimeout(() => {
        mensaje.style.transition = 'opacity 0.5s';
        mensaje.style.opacity = '1';
    }, 100);
});

// Función para el contador
let contador = 0;
const btnContador = document.getElementById('btnContador');
const displayContador = document.getElementById('contador');

btnContador.addEventListener('click', function() {
    contador++;
    displayContador.textContent = contador;
    
    // Efecto visual cuando se incrementa
    displayContador.style.transform = 'scale(1.2)';
    setTimeout(() => {
        displayContador.style.transform = 'scale(1)';
    }, 200);
});

// Mensaje de bienvenida en la consola
console.log('¡Bienvenido! Esta página está funcionando correctamente.');
console.log('Puedes inspeccionar este sitio para ver el código JavaScript.');