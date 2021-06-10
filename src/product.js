// Récupération des informations de la camera sur laquelle on a cliqué et qui s'affiche en page produit ;
// Possibilité d'ajout des élements (caméras) dans le panier par leurs ID respectives

document.addEventListener("DOMContentLoaded", function () {
    const cameraId = new URLSearchParams(window.location.search).get('camera_id');

    fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function (response) {
        response.json().then(function(camera) {
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
            document.querySelector('main div.container-fluid').innerHTML += html;

            document.getElementById("my-cart").addEventListener('click', function() {
                const productData = document.getElementById('camera').dataset;
                let panier = JSON.parse(localStorage.getItem('my-cart'));
                panier = panier || [];
                panier.push(productData);
                localStorage.setItem('my-cart', JSON.stringify(panier));
            });
        });
    });
});

// Rendre actif le formulaire
// Gérer la page confirmation

// Call POST sur /order et affichage de l'id de la commande (qui est obtenue en resutlat du call POST sur /order)
// Bonus : ajouter la possibilité de supprimer un element du panier