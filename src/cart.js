// Fonction écoute d'évènement, définition du prix à 0, soit panier est rempli soit c'est un tableau vide en objet JS, container panier dans le <t body> :
document.addEventListener("DOMContentLoaded", function () {
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

// Gestion du formulaire, contrôle des données
function validationForm() {
    prenom = document.getElementById('prenom').value;
    nom = document.getElementById('nom').value;
    pseudo = document.getElementById('pseudo').value;

    if (prenom == "" || nom == "" || pseudo == "") {
        return false;
    } else if (!isNaN(prenom) || !isNaN(nom)) {
    alert('Votre prénom ou votre nom ne doit pas contenir des caractères numériques numeriques');
    return false;
    }
    else {
        return true;
        // window.open("confirmation.html?prenom=" + prenom + "&nom=" + nom, '_parent');
    }
    // return true;
  }

  function checkprenom() {
//     prenom = document.getElementById('prenom').value;
    
//  if (!isNaN(prenom) ) {
//     alert('Votre prénom doit etre non numeriques');
//     }
    var prenom=document.getElementById('prenom').value;
    if( !isNaN(prenom)){
        document.getElementById('prenom').style.borderColor = "red";
        // document.getElementById("erreurprenom").style.display = "block";
        // return false;
    }else{
        document.getElementById('prenom').style.borderColor = "green";
    }
  }
// Gérer la page confirmation

// Call POST sur /order et affichage de l'id de la commande (qui est obtenue en resutlat du call POST sur /order)
// Bonus : ajouter la possibilité de supprimer un element du panier