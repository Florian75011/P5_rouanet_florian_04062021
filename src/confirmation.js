// Gestion du calcule du prix total et affichage de la page de confirmation (envoie des données)

document.addEventListener("DOMContentLoaded", function () {
    const prenom = new URLSearchParams(window.location.search).get('prenom');
    const nom = new URLSearchParams(window.location.search).get('nom');
    let msg = "Bonjour <strong>" + prenom + " " + nom + "</strong>," + "<br/>Nous vous remercions pour vos achats !";
    document.getElementById('msg').innerHTML += msg;
});