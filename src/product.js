$(document).ready(function() {
    const cameraId = new URLSearchParams(window.location.search).get('camera_id');
    console.log(cameraId);

    fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function(response) {
        response.json().then(function(camera) {
            // ICI on doit modifier
        });
    });
});

// pour l'instant on a recuperer les informations de la camera sur laquelle on a cliqué
// Afficher les info de la camera
// Proposer la customisation de la lentilles de la camera (avec camera.lenses)
// Ajouter le bouton "Ajouter au panier"
// Quand on clique sur le bouton "Ajouter au panier" on ajoute des infos dans le localStorage (en utilisant JSON.stringify)

// ETAPE suivante
// Page panier sur laquelle on passe dans le localStorage pour recuperer le contenu du panier et l'afficher en html (+ js)
// Si t'es chaud tu peux ajouter la possibilité de supprimer un element du panier

// Page de confirmation de commande
// Call POST sur /order et affichage de l'id de la commande (qui est obtenue en resutlat du call POST sur /order)

function ajouterAuPanier(camera) {
    let panier = JSON.parse(localStorage.getItem('panier'))
    panier.push(camera)
    localStorage.setItem('panier', JSON.stringify(panier))    
}
let panier = JSON.parse(localStorage.getItem('panier'))
panier.push(camera)
localStorage.setItem('panier', JSON.stringify(panier))

var camera1 = {name: 'camera1', price: 1111, descrption: 'toto1'}
var camera2 = {name: 'camera2', price: 2222, descrption: 'toto2'}