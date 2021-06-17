// Implémentation de l'Index avec d'abord un ajout d'un eventListener sur le document qui est trigger
document.addEventListener("DOMContentLoaded", function () {
  insertCamerasIntoHTML();
});

function insertCamerasIntoHTML() {
  // Quand la page a fini de charger puis requete GET sur l'API
  fetch('http://localhost:3000/api/cameras').then(function (response) {
    // En cas de succes de la requete a l'API on parse la reponse en JSON
    // On stock l'element html qui va nous servir a contenir le html des cameras dans une variable camerasContainer
    response.json().then(function (data) {
      const camerasContainer = document.getElementById('cameras_container');

      // On itère/boucle sur l'objet qui correspond à la reponse JSON de l'API pour passer sur chaque cameras que l'API nous a retourné
      for (const camera of data) {
        // Pour chacune des caméras on génère du HTML qu'on vient ensuite insérer les uns à la suite des autres dans le container
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

        camerasContainer.innerHTML += html
      }
    });
  });
}

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