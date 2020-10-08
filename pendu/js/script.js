// let clavier = 'azertyuioqsdfghjklmwxcvbn';
// let mots = ['bureau', 'table', 'bouteille', 'chaise'];
// let array = '';
// let mot = mots[(Math.floor(Math.random) * mots.length)];
// // Math.random prend un chiffre random, floor le rend entier mots.length multiplie le mot par le chiffre aléatoire



// for (let i = 0; i < clavier.length; i++) {
//     let pendu = document.createElement('button');
//     pendu.innerHTML = clavier[i];
//     pendu.addEventListener('click', verification);
//     document.body.appendChild(pendu);
// }


// function verification() {
//     let lettre = this.innerHTML;
//     if (mot.includes(lettre)) {
//         for (let i = 0; i < mot.length; i++) {
//             if (mot[i] === lettre) {
//                 array[i] = mot[i];
//             }
//         }
//     }
// }



// Tableau contenant les mots qu'il est possible de faire deviner
let mots = ['aleatoire','methode','javascript','football','sport'];
​
// Tableau contenant l'alphabet pour faire le clavier virtuel
let tab = 'abcdefghijklmnopqrstuvwxyz';
​
//la fonction math.floor(Math.random()) génére quelque chose aléatoirement
let mot = mots[Math.floor(Math.random() * mots.length)];
​
// Variable qui recevra le nombre de bonne réponse de l'utilisateur
let nbBonneReponse = 0;
​
// Nombres de chances
let chance = 5;
​
// ----- Clavier virtuel -----
// Pour toutes les lettres de l'alphabet
for (let j = 0; j < tab.length; j++){
  // On crée un bouton
  let touche = document.createElement('button');
  // On lui assigne sa lettre
  touche.innerHTML = tab[j];
  // On lui ajoute un écouteur d'événement (ici 'click')
  touche.addEventListener('click', verification);
  // On ajoute le bouton au body
  document.body.appendChild(touche);
}
​
// On crée un paragraphe
let afficheChances = document.createElement('p');
// On y affiche le nombre de chance
afficheChances.innerHTML = 'Chance :' + chance; 
// On ajoute le paragraphe au body
document.body.appendChild(afficheChances);
​
// On crée le container du mot à deviner
let div = document.createElement('div');
// On lui donne un id
div.id = 'mot';
div.style.marginTop = '50px';
// On l'ajoute au body
document.body.appendChild(div);
​
​
// Pour chaques lettres du mots à deviner
for (let i = 0; i < mot.length; i++){
  // On crée un span
  let elem = document.createElement('span');
  // On lui met une bordure et une marge intérieure
  elem.style.padding = '10px';
  elem.style.border = '2px solid black';
  // On l'ajoute au body
  div.appendChild(elem);
}
​
// Fonction de verification de la lettre proposée par l'utilisateur
function verification(){
  // On récupère la lettre
  let lettre = this.innerHTML;
    this.disabled = 'true';​
  // On récupère les spans d'affichage du mot
  let spans = document.querySelectorAll('#mot span');
​
  // Si la lettre et dans le mot
  if(mot.includes(lettre)){
    // Pour chaque lettres du mot
    for (let i = 0; i < mot.length; i++){
      // On vérifie si la lettre du mot et égale à la proposition
      if(mot[i] === lettre){
        // Si oui on augmente le nombre de bonne réponse
        nbBonneReponse++;
        // On affiche les lettres correspondantes dans les spans
        spans[i].textContent = mot[i];
      }
    }
    // Si le nombre de bonnes réponses et égale au nombre de lettres du mot
    if(nbBonneReponse === mot.length) {
      // On crée le paragraphe 
      let message = document.createElement('p');
      // On affiche le message de victoire
      message.textContent = 'Vous avez gagné !'
      // On ajoute le message au body
      document.body.appendChild(message);
    }
  // Sinon si la lettre n'est pas dans le mot
  } else {
    // On diminue le nombre de chance
    chance--;
    // On change l'affichage
    afficheChances.innerHTML = 'Chance :' + chance;
    // Si le nombre de chance et à zéro
    if(chance == 0){
      // On crée le paragraphe
      let message = document.createElement('p');
      // On ajoute le message de défaite
      message.textContent = 'Vous avez perdu !';
      // On ajoute au body
      document.body.appendChild(message);
    }
  }
}

let monImage = document.createElement('img')
document.body.appendChild(monImage);
monImage.src = 'endu_'+nbError+'.jg';

















