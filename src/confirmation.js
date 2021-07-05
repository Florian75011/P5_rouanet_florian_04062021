document.addEventListener("DOMContentLoaded", function () {
  // Création d'un nouvel objet (instanciation) contenant les paramètres contenus dans l'URL (paramètreURL, localisé/recherché)
  const urlSearchParams = new URLSearchParams(window.location.search);
  // Intégration du résultat des trois fonctions (nom client, prix total, ID order en HTML) dans la constante
  insertClientNameIntoHTML(urlSearchParams);
  insertTotalPriceIntoHTML(urlSearchParams);
  insertOrderIdIntoHTML(urlSearchParams);
});

function insertClientNameIntoHTML(urlSearchParams) {
  // Les get servent à prendre la valeur associée concernée depuis le formulaire
  const prenom = urlSearchParams.get("prenom");
  const nom = urlSearchParams.get("nom");

  // Insertion de l'affichage en page HTML
  document.getElementById("name").innerHTML += `${prenom} ${nom}`;
}

function insertTotalPriceIntoHTML(urlSearchParams) {
  const totalPrice = urlSearchParams.get("total_price");

  document.getElementById("total-price").innerHTML += totalPrice;
}

function insertOrderIdIntoHTML(urlSearchParams) {
  const orderId = urlSearchParams.get("order_id");

  document.getElementById("id-com").innerHTML += orderId;
}
