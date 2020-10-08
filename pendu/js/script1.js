let mots = ['aleatoire','methode','javascript','football','sport'];
let tab = 'azertyuiopqsdfghjklmwxcvbn';

//math.floor(Math.random()) génére quelque chose aléatoirement math.random valeur random du tableau//mots.length longueur de l'array//
let random = (math.floor(math.random() * mots.length));

// Variable qui recevra le nombre de bonne réponse de l'utilisateur
let bonneReponse = '';
// Nombres de chances
let chance = 5;

// Clavier

// Pour toutes les lettres de l'alphabet
for (let i = 0; i < mots.length; i++ );{
    let touche = document.createElement('button');
    touche.innerHTML = tab[j];
    touche.addEventListener('click', verification);
    document.body.appendChild(touche);
}

// On crée un bouton

// On lui assigne sa lettre

// On lui ajoute un écouteur d'événement (ici 'click')

// On ajoute le bouton au body

let afficherChance = document.createElement('p');
afficherChance.innerHTML = 'Chance :' + chance ;
document.body.appendChild(afficherChance);

let boite = document.createElement('div');
boite.id = 'mot';
boite.style.marginTop = '60px';
document.body.appendChild(boite);


// On crée un paragraphe

// On y affiche le nombre de chance

// On ajoute le paragraphe au body

// On crée le container du mot à deviner

// On lui donne un id

// On l'ajoute au body


for (i = 0; i < mots.length; i++) {
    let boite = document.createElement('span');
    boite.style.border = '2px solid black';
    boite.style.margin = '40px';
    document.body.appendChild(lettre);
}

// Pour chaques lettres du mots à deviner
// span
// bordure& marge
// add body
fonction verification() {
    let lettre = this.innerHTML;
    

}
// Fonction de verification de la lettre proposée par l'utilisateur
  // On récupère la lettre
  // On récupère les spans d'affichage du mot
  // Si la lettre et dans le mot
    // Pour chaque lettres du mot
      // On vérifie si la lettre du mot et égale à la proposition
        // Si oui on augmente le nombre de bonne réponse
        // On affiche les lettres correspondantes dans les spans
    // Si le nombre de bonnes réponses et égale au nombre de lettres du mot
      // On crée le paragraphe 
      // On affiche le message de victoire
      // On ajoute le message au body
  // Sinon si la lettre n'est pas dans le mot
    // On diminue le nombre de chance
    // On change l'affichage
    // Si le nombre de chance et à zéro
      // On crée le paragraphe
      // On ajoute le message de défaite
      // On ajoute au body
