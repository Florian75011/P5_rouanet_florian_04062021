document.addEventListener("DOMContentLoaded", function () {
    const prenom = new URLSearchParams(window.location.search).get('prenom');
    const nom = new URLSearchParams(window.location.search).get('nom');
    let msg = "Bonjour <strong>" + prenom + " " + nom + "</strong>," + "<br/>Nous vous remercions pour vos achats !";
    document.getElementById('msg').innerHTML += msg;
});

// Afficher du calcul du prix total
// document.addEventListener("DOMContentLoaded", function () {
//     let totalPrice = 0;
//     const panier = JSON.parse(localStorage.getItem('my-cart')) || [];
//     const cartContainer = document.getElementById('cart-container');

//     const totalPriceHtml = `
//     <tr class="bg-white">
//         <td></td>
//         <td>Prix total</td>
//         <td>${totalPrice}€</td>
//     </tr>
//     `;
//     cartContainer.innerHTML += priceHtml;
// });

//Gestion du changement de page et envoie du formulaire
// Gestion d'envoie de formulaire de commande

// Gestion de l'identifiant de commande
// POST /order - Requête JSON contenant un objet de contact et un
// tableau de produits - Retourne l'objet contact, le tableau produits et order_id (string)
