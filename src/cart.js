// Fonction écoute d'évènement, définition du prix à 0, soit panier est rempli soit c'est tableaux vide, container panier dans le <t body> :
document.addEventListener("DOMContentLoaded", function() {
    let totalPrice = 0;
    const panier = JSON.parse(localStorage.getItem('my-cart')) || [];
    const cartContainer = document.getElementById('cart-container');

    // Boucle qui passe sur chaque élément du panier, méthode qui ajoute et calcule le prix total, variable avec contenu HTML envoyée ensuite dans la page :
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

    // Création d'un element HTML qui contient le prix total de tous les elements du panier, puis insertion dans le DOM
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