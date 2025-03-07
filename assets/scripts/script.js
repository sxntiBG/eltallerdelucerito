document.addEventListener("DOMContentLoaded", () => {
    const listaProductos = document.getElementById("lista-productos");

    fetch("./assets/json/productos.json")
        .then(response => response.json())
        .then(data => {
            data.productos.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                    <p class="nombre-producto"><span>${producto.nombre}</span></p>
                    <p><span>COP</span> ${producto.precio_cop.toLocaleString()}</p>
                    <p><span>USD</span> ${producto.precio_usd.toFixed(2)}</p>
                `;

                listaProductos.appendChild(card);
            });
        })
        .catch(error => console.error("Error al cargar el JSON:", error));
});

document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('show');
});