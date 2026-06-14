// VARIABLES DEL SITIO
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// FUNCIONAMIENTO DEL CARRITO
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Aumentamos el contador
        cartCount++;
        cartCountElement.textContent = cartCount;

        // Efecto visual rápido en el botón al presionar
        const originalText = button.textContent;
        button.textContent = "¡Añadido! 🎮";
        button.style.backgroundColor = "#22d3ee"; // Cambia temporalmente a cian
        button.style.color = "#121212";

        // Regresar el botón a su estado original tras 1 segundo
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "transparent";
            button.style.color = "#f3f4f6";
        }, 1000);

        // Obtener datos del producto seleccionado (por si en el futuro quieres armar el desglose)
        const productName = button.getAttribute('data-name');
        console.log(`Producto añadido a Chapistrina Games: ${productName}`);
    });
});

// Mensaje secreto en consola para los curiosos
console.log("%c¡Bienvenido a Chapistrina Games! El código fuente está listo para jugar.", "color: #a855f7; font-size: 16px; font-weight: bold;");