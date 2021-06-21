// A l'affichage de cette page on appelle les fonctions du panier et du formulaire
document.addEventListener("DOMContentLoaded", function () {
    insertCartIntoHTML();
    addSubmitListenerToForm();
});

// Gestion du panier avec définition du prix à 0, puis "soit panier est rempli soit il renvoie un tableau vide" en objet JS à injecter dans le <t body> :
function insertCartIntoHTML() {
    let totalPrice = 0;
    const panier = JSON.parse(localStorage.getItem('my-cart')) || [];
    const cartContainer = document.getElementById('cart-container');

    // Boucle qui passe sur chaque élément du panier + méthode qui ajoute et calcule le prix total + variable avec contenu HTML ensuite envoyée dans la page :
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

    // Création d'un element HTML qui contient/affiche le prix total de tous les elements du panier + insertion dans le DOM
    const priceHtml = `
        <tr class="bg-white" id="total_price">
            <td></td>
            <td>Prix total</td>
            <td>${totalPrice}€</td>
        </tr>
    `;
    cartContainer.innerHTML += priceHtml;
}

// Gestion du submit du formulaire
function addSubmitListenerToForm() {
    //Placement du tuto formulaire de P. Giraud BootStrap/JS pour checker la validité des informations
        // Récupération de la valeur de l'input de chaque onglet du formulaire
        // Renvoie le tableau de caméras soit le panier en ne prenant que son ID
    }

function sendOrderToBackEnd(contact, products) {
    // Cibler l'API avec un fetch, requête POST et fonction
    // Renvoyer un nouveau tableau et récupérer le local storage + JSON
    // Ajouter et afficher chaque valeur sur la page de confirmation
}
