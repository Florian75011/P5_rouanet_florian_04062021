// A l'affichage de cette page on appelle les fonctions du panier et du formulaire
document.addEventListener("DOMContentLoaded", function () {
  insertCartIntoHTML();
  // try {
  addSubmitListenerToForm();
  // }
  // catch (error) {
  //   console.error(error, "Erreur user !");
  // }
});

// Gestion du panier avec définition du prix à 0, puis "soit panier est rempli soit il renvoie un tableau vide" en objet JS à injecter dans le <t body> :
function insertCartIntoHTML() {
  let totalPrice = 0;
  const panier = JSON.parse(localStorage.getItem("my-cart")) || [];
  const cartContainer = document.getElementById("cart-container");

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
  let form = document.getElementById("cart-form");
  form.addEventListener(
    "submit",
    function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
      }

      // On contient les données du panier dans l'envoie du formulaire (parser et récupération d'objet dans le localStorage)
      const panier = JSON.parse(localStorage.getItem("my-cart")) || [];

      // Récupération de la valeur de l'input de chaque onglet du formulaire dans une constante
      const contact = {
        firstName: document.getElementById("prenom").value,
        lastName: document.getElementById("nom").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        city: document.getElementById("ville").value,
      };
      // Renvoie nouveau tableau de caméras du panier en ne retournant que son ID
      const products = panier.map((camera) => camera.id);

      sendOrderToBackEnd(contact, products);

      // Eviter blocage par rapport aux traitements des évènements
      event.preventDefault();
      event.stopPropagation();
    },
    false
  );
}

// Fonction d'envoie au back-end de la commande avec prises de paramètre (données de la personne et des produits)
function sendOrderToBackEnd(contact, products) {
  // On creé les headers (indications envoyées au serveur) : à utiliser pour la requête à l'API afin d'indiquer que le format des données envoyées (Content-Type) sera en JSON
  let headers = new Headers();
  headers.append("Content-Type", "application/json");

  // Requête ciblée POST de l'API pour récupérer les données du formulaire
  fetch("http://localhost:3000/api/cameras/order", {
    method: "POST",
    // On transforme un objet JS en chaîne de caractères JSON et on l'envoie en tant que body de la requête à l'API
    body: JSON.stringify({
      contact: contact,
      products: products,
    }),
    // On passe les headers crée précédemment en tant que header de la requête à l'API
    headers: headers,
  }).then(function (response) {
    response.json().then(function (data) {
      // Envoie du panier (l'array vide entre parenthèse sert à vider le panier une fois que la commande est passée)
      localStorage.setItem("my-cart", JSON.stringify([]));
      // On veut selectionner le premier (et unique) élément du tableau "prix total"
      const totalPrice = document.querySelectorAll(
        "#total_price td:last-child"
      )[0].innerText;
      // Méthode de redirection pour passer sur la page suivante avec les data à récupérer puis à afficher
      window.location.href = `confirmation.html?nom=${data.contact.lastName}&prenom=${data.contact.firstName}&order_id=${data.orderId}&total_price=${totalPrice}`;
    });
  });
}
