document.addEventListener("DOMContentLoaded", function() {
    let totalPrice = 0;
    const panier = JSON.parse(localStorage.getItem('my-cart')) || [];
    const cartContainer = document.getElementById('cart-container');

    for (const camera of panier) {
        totalPrice += parseInt(camera.price);
        const cameraHtml = `
            <tr class="bg-gray-100">
                <td><img src="${camera.imageUrl}" width="80px" height="60px"/></td>
                <td><a href="product.html?camera_id=${camera.id}">${camera.name}</a></td>
                <td>${camera.price}€</td>
            </tr>
        `;

        cartContainer.innerHTML += cameraHtml;
    }

    const priceHtml = `
        <tr class="bg-white">
            <td></td>
            <td>Prix total</td>
            <td>${totalPrice}€</td>
        </tr>
    `;
    cartContainer.innerHTML += priceHtml;
});

// Gestion du formulaire