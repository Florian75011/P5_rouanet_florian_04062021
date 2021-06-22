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
    let form = document.getElementById('cart-form');
    form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        // On contient les données du panier dans l'envoie du formulaire (parser et récupération d'objet dans le localStorage)
        const panier = JSON.parse(localStorage.getItem('my-cart')) || [];

        // Récupération de la valeur de l'input de chaque onglet du formulaire dans une constante
        const contact = {
            firstName: document.getElementById('prenom').value,
            lastName: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('ville').value
        };
        // Renvoie nouveau tableau de caméras du panier en ne retournant que son ID
        const products = panier.map(camera => camera.id);

        sendOrderToBackEnd(contact, products);

        // Eviter blocage de la machine avec un traitement infini
        event.preventDefault();
        event.stopPropagation();
    }, false);
}

function sendOrderToBackEnd(contact, products) {
    // Cibler l'API avec un fetch, requête POST et fonction
    // Renvoyer un nouveau tableau et récupérer le local storage + JSON
    // Ajouter et afficher chaque valeur sur la page de confirmation

    // fetch, POST, response.json, localStorage, getElement, window.location.href = `confirmation.html?`, etc.
}
