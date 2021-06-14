// Ajout au document d'un évènement à écouter, on se branche sur l'adresse de l'API avec fetch (cible chaque donnée à afficher),
document.addEventListener("DOMContentLoaded", function () {
  fetch('http://localhost:3000/api/cameras').then(function (response) {
    // Transforme la variable response au format JSON, on branche dessus une fonction prenant en paramètre data=données, et qui s'exécute à la ligne suivante
    // La constante cameraContainer récupère l'ID ciblée des caméras par la fonction document.get...
    response.json().then(function (data) {
      const camerasContainer = document.getElementById('cameras_container');

      // La boucle prend en paramètre une constante contenant les données de la caméra
      // Dans la variable html on place le font-end que l'on veut afficher avec interpollations pour lier les données de chaque caméra
      for (const camera of data) {
        let html = `
          <div class="col">
            <div class="card shadow-sm">
              <img src="${camera.imageUrl}" class="bd-placeholder-img card-img-top" width="100%" height="225"
                alt="vente en ligne, caméra vintage" xmlns="http://www.w3.org/2000/svg" role="img"
                aria-label="Placeholder: Caméras" preserveAspectRatio="xMidYMid slice" focusable="false">
              <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
              </img>
          
              <div class="card-body">
                <h3 class="display-6 text-center">${camera.name}</h3>
                <h4 class="text-center">${camera.price}€</h4>
                <p class="card-text">${camera.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="product.html?camera_id=${camera._id}">
                      <button type="button" class="btn btn-lg btn-outline-secondary btn-outline-ORI">Découvrir notre
                        caméra
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

        // Dans la variable html on inclut la variable camerasContainer ajoutée au document HTML
        camerasContainer.innerHTML += html
      }
    });
  });
});

// // Méthode d'appel JS moderne de 2018 et ajout de la librairie query.js :
// import retrieveContent from './query.js';

// async function showContent() {
//   try {
//     const content = await retrieveContent();

//     let elt = document.createElement('div');
//     elt.innerHTML = content.join('<br />');

//     document.getElementsByTagName('body')[0].appendChild(elt);
//   } catch (e) {
//     console.log('Error', e);
//   }
// }

// showContent();

  // $(document).ready(function() {
  // $(html).appendTo('main div.container div.row');