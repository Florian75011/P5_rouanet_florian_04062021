// Méthode d'appel JS moderne de 2018 et ajout de la librairie query.js :
import retrieveContent from './query.js';

async function showContent() {
  try {
    const content = await retrieveContent();

    let elt = document.createElement('div');
    elt.innerHTML = content.join('<br />');

    document.getElementsByTagName('body')[0].appendChild(elt);
  } catch (e) {
    console.log('Error', e);
  }
}

showContent();

// Coder la fonction du bouton entrer pour passer à la page liste-ours.