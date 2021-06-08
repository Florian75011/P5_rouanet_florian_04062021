// Pour l'instant on a recuperer les informations de la camera sur laquelle on a cliqué
$(document).ready(function () {
    const cameraId = new URLSearchParams(window.location.search).get('camera_id');
    console.log(cameraId);

    fetch(`http://localhost:3000/api/cameras/${cameraId}`).then(function (response) {
        response.json().then(function (camera) {
            // function addCart(camera) {
            //     let panier = JSON.parse(localStorage.getItem('my-cart'))
            //     panier.push(camera)
            //     localStorage.setItem('my-cart', JSON.stringify(panier))    
            // }
            // let panier = JSON.parse(localStorage.getItem('my-cart'))
            // panier.push(camera)
            // localStorage.setItem('my-cart', JSON.stringify(my-cart))

            // var camera1 = {name: 'camera1', price: 1111, description: 'toto1'}
            // var camera2 = {name: 'camera2', price: 2222, description: 'toto2'}
        });
    });
});

// Afficher les info de la camera
// Proposer la customisation de la lentilles de la camera (avec camera.lenses)
// Quand on clique sur le bouton "Ajouter au panier" on ajoute des infos dans le localStorage (en utilisant JSON.stringify)

// Page panier sur laquelle on passe dans le localStorage pour recuperer le contenu du panier et l'afficher en html (+ js)
// Bonus : ajouter la possibilité de supprimer un element du panier

// Page de confirmation de commande
// Call POST sur /order et affichage de l'id de la commande (qui est obtenue en resutlat du call POST sur /order)

/*
const object1 = { a: 'foo', b: 42, c: {} };

const queryString = window.location.search;
console.log(queryString);

html = $.parseHTML( str ),
nodeNames = [];

Append the parsed HTML
$log.append( html );

First camera id "5be1ed3f1c9d44000030b061"

$("#bfCaptchaEntry").click(function(){ myFunction(); });

itemSelected front-end push.nav sur la page

Le localStorage lieu où le nav/site stock des donnnées et récupèrent le tout en JS

$('main div.container div.row').append(html);
Une string interpollation

DOM : onClick let panier = JSON.stringyfy.parse + array vide à remplir

camera.lenses (get.lenses + boucle for - options personnalisées)

Get /:_id - Renvoie l'élément correspondant à identifiant given_id

Caméras vintage : ​http://localhost:3000/api/cameras

Pour déclarer une variable globale en Javascript, il suffit de lui affecter une valeur sans mettre l'instruction var
*/