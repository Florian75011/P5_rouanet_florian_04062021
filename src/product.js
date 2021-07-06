// Ajout d'un évènement à écouter qui prend en paramètre DOMcontentLoaded + une fonction
document.addEventListener("DOMContentLoaded", function () {
  insertCameraIntoProductHTML();
});

// Constante dans laquelle on instancie une nouvelle recherche de paramètre localisant/recherchant/récupérant l'ID de la caméra
function insertCameraIntoProductHTML() {
  const cameraId = new URLSearchParams(window.location.search).get("camera_id");

  // On se branche sur l'adresse de l'API en la ciblant avec fetch
  fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function (
    response
  ) {
    // Transforme variable response au format JSON et on branche dessus une autre fonction prenant en paramètre camera
    response.json().then(function (camera) {
      // Dans la variable html on place le font-end à faire afficher avec interpollations JS pour lier les données concernées de chaque caméra
      let html = `
                <div class="col-12" id="camera" data-id="${
                  camera._id
                }" data-name="${camera.name}" data-price="${
        camera.price
      }" data-image-url="${camera.imageUrl}">
                    <div class="card shadow-sm">
                        <img src="${
                          camera.imageUrl
                        }" class="bd-placeholder-img card-img-top img-responsive" id="imageProduct" alt="vente en ligne, caméra vintage" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Placeholder: Caméras" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                            dy=".3em"></text>
                        </img>

                        <div class="card-body">
                            <h3 class="display-6 text-center pinkORI" id="nameProduct">${
                              camera.name
                            }</h3>
                            <h4 class="text-center" id="priceProduct">${
                              camera.price
                            }€</h4>
                            <p class="card-text text-center" id="descriptionProduct">${
                              camera.description
                            }</p>

                            <label for="lenses-select">Choisissez une lentille:</label>
                            <select name="lenses" id="lenses-select">
                                ${camera.lenses.map(
                                  (lense) =>
                                    `<option value="${lense}">${lense}</option>`
                                )}
                            </select><br>

                            <div class="btn-group">
                                <button type="button" id="my-cart" class="btn btn-lg btn-outline-secondary btn-outline-ORI mt-4 align-middle">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
      // On cible le chemin CSS sur lequel on va injecter le HTML de la variable html
      document.querySelector("main div.container-fluid").innerHTML += html;

      // Ecoute pour faire marcher la fonction de click du dessous
      addClickListenerOnCartButton();
    }).catch(function(error) {
      console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
    });
  }).catch(function(error) {
    console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
  });
}

// Récupération des informations de la caméra sur laquelle on a cliqué et qui s'affiche en page produit (possibilité d'ajout des élements (caméras) dans le panier par ID respectives
function addClickListenerOnCartButton() {
  // On ajoute un eventListener sur l'element qui a pour id "my-cart" et qui sera trigger au clique sur cet élément
  document.getElementById("my-cart").addEventListener("click", function () {
    // Variable dans laquelle on vient stocker un objet représentant les informations de la caméra (recupérées dans le HTML)
    const productData = document.getElementById("camera").dataset;
    // On va ensuite récupérer le panier stocké dans le localStorage à la clé "my-cart", transformé ensuite en objet JS (grâce à JSON.parse)
    let panier = JSON.parse(localStorage.getItem("my-cart"));
    // panier est soit un panier avec des éléments soit un tableau vide (dans le cas où le localStorage ne contient rien dans la clé "my-cart") + possibilité d'ajout
    panier = panier || [];
    panier.push(productData);
    // On envoie un item au my-cart parsé en JSON string dans le localStorage
    localStorage.setItem("my-cart", JSON.stringify(panier));
  });
}
