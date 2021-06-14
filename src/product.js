// Récupération des informations de la camera sur laquelle on a cliqué et qui s'affiche en page produit + Possibilité d'ajout des élements (caméras) dans le panier par leurs ID respectives

// Ajout d'un évènement à écouter qui prend en paramètre DOMcontentLoaded + une fonction
// La constante contient une nouvelle recherche instanciée de paramètres d'URL qui localisent/recherchent puis récupèrent l'ID de la caméra
document.addEventListener("DOMContentLoaded", function () {
    const cameraId = new URLSearchParams(window.location.search).get('camera_id');

    // On se branche sur l'adresse de l'API avec fetch (qui cible chaque donnée à afficher)
    fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function (response) {
            // Transforme la variable response au format JSON, on branche dessus une autre fonction prenant en paramètre camera
        response.json().then(function(camera) {
            // Dans la variable html on place le font-end que l'on veut afficher avec interpollations pour lier les données concernées de chaque caméra
            let html = `
                <div class="col-12" id="camera" data-id="${camera._id}" data-name="${camera.name}" data-price="${camera.price}" data-image-url="${camera.imageUrl}">
                    <div class="card shadow-sm">
                        <img src="${camera.imageUrl}" class="bd-placeholder-img card-img-top" id="imageProduct" width="100%"
                            height="555px" alt="vente en ligne, caméra vintage" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Placeholder: Caméras" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                            dy=".3em"></text>
                        </img>

                        <div class="card-body">
                            <h3 class="display-6 text-center pinkORI" id="nameProduct">${camera.name}</h3>
                            <h4 class="text-center" id="priceProduct">${camera.price}€</h4>
                            <p class="card-text text-center" id="descriptionProduct">${camera.description}</p>

                            <label for="lenses-select">Choisissez une lentille:</label>
                            <select name="lenses" id="lenses-select">
                                ${camera.lenses.map(lense => `<option value="${lense}">${lense}</option>`)}
                            </select><br>

                            <div class="btn-group">
                                <button type="button" id="my-cart" class="btn btn-lg btn-outline-secondary btn-outline-ORI mt-4 align-middle">
                                    Ajouter au panier
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
                // Autre méthode de récupération de code HTML + incusion dans la variable html de cette traduction de code via .innerHTML
            document.querySelector('main div.container-fluid').innerHTML += html;

            // On récupère l'élement par l'ID qui se branche sur document, auquel on ajoute un évènement à écouter prenant en paramètre le clique utilisateur et une fonction
            document.getElementById("my-cart").addEventListener('click', function() {
                // On met dans la constante le document qui contient la caméra récupérée par l'ID (+ chaque donnée de la caméra)
                // Dans la variable panier on transforme le JSON en récupérant l'Item my-cart dans le localStorage (on stocke localement)
                // Soit le panier contient la variable d'avant (produits caméras), soit il est un tableau vide + possibilité d'ajout
                const productData = document.getElementById('camera').dataset;
                let panier = JSON.parse(localStorage.getItem('my-cart'));
                panier = panier || [];
                panier.push(productData);
                // Le localStorage prend la fonction setItem servant à afficher l'Item, stringify convertit le panier en string JSON
                localStorage.setItem('my-cart', JSON.stringify(panier));
            });
        });
    });
});