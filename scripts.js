// Variables globales
let cart = [];

// Función para agregar un producto al carrito
function addToCart(product, price) {
    cart.push({ product, price });
    const cartCount = document.getElementById("cart-count");
    cartCount.innerText = cart.length; // Actualiza el contador
    updateCart();
}

// Función para alternar la visibilidad del carrito
function toggleCart() {
    const cartModal = document.getElementById("cart-modal");
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

// Función para actualizar el contenido del carrito (modal)
function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = ""; // Limpia los elementos anteriores
    let total = 0;

    // Agrega cada producto al carrito
    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.product} - L${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Muestra el total
    cartTotal.textContent = `Total: L${total.toFixed(2)}`;
}

function clearCart() {
    cart = []; // Vacía el carrito
    document.getElementById("cart-count").innerText = "0"; // Restablece el contador
    updateCart();
}
