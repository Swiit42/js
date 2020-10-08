var age = 28;

if(age > 18){
  console.log('L\'utilisateur est majeur');
}
else if(age == 18){
  console.log('Egale à 18');
}
else {
  console.log('L\'utilisateur est mineur');
}
switch(age){
case 20:
  console.log('20 ans');
  break;
case 12:
  console.log('12 ans');
  break;
default:
  console.log('ni 12 ni 20 ans');
  break;
  }
var  conditionDeTest = '1';
if(conditionDeTest) {
  console.log('Vrai');
}else{
  console.log('Faux');
// }
var anneeAujourdhui = 2020;
var anneeNaissance = prompt('Quelle est votre année de naissance?');
var ageUtilisateur = (anneeAujourdhui - anneeNaissance);
var moisAujourdhui = 09;

console.log(anneeAujourdhui);
if (ageUtilisateur > 18){
  console.log('L\'utilisateur est majeur');
} else if (ageUtilisateur < 18) {
  console.log('L\'utilisateur est mineur');
} else {
  var moisAujourdhui = 09;
  var moisNaissance = prompt('Quel est votre mois de naissance?');
  if (moisNaissance > moisAujourdhui){
    console.log('L\'utilisateur est né cette année et est mineur');
  } else{
    console.log('L\'utilisateur est né cette année et est majeur');
  }
}

var annee = prompt ('Quelle année?');
  if (((annee % 4) == 0) && ((annee % 100) != 0) || ((annee % 400) == 0)){
  console.log('L\'année' + annee +'est bissextile');
} else {
  console.log('L\'année'+ annee +'n\'est pas bissextile');
}
var caActuel = 45000;
var caPrecedent = 50000;
var anneeActuelle = 2018;
var reduction = 0;

// var caActuel = prompt('Quel est votre chiffre d\'affaire de cette année?');
// var caPrecedent = prompt('Quel est votre chiffre d\'affaire de l\'année dernière ?');
// var anneeActuelle = prompt(' En quelle année nous sommes?')
  if( (30000 < caActuel) && (caActuel< 60000)) {
    reduction = 0.1;
  }
  else if (((20000 < caActuel ) && ( caActuel < 29999) && (caPrecedent <= 50000))) {
    reduction = 0.2;
  }
  if (((anneeActuelle % 4) == 0) && ((anneeActuelle % 100) != 0) || ((anneeActuelle % 400) == 0)) {
    reduction = reduction + 0.05;
  } console.log("Il a le droit à "+ (reduction * 100  ) + "% et cela equivaut a " + (caActuel * reduction) + "€ ");


for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 10);
}
const personne = {
  prenom: 'Sylvain'
}
personne.nom = 'Dupont';
onsole.log(personne);
let test = false;
if (true) {
  let test = true;
 console.log(test);
}
console.log(test);

a = 2;
let a;
console.log(a); // 2
const a = 1;
let b = a;
console.log(a, b);
b = 2;
console.log(a, b);
const obj = {a: 1};
const obj2 = obj;
obj2.a = 2;
console.log(obj);

const age = 18;
	switch (age) {
	  case 21:
	    console.log('Tu peux boire de l’alcool aux Etats-Unis.');
	  case 18:
	    console.log('Tu peux boire de l’alcool en France.');
	  case 16:
	    console.log('Tu peux boire de l’alcool à Cuba.');
	  case 14:
	    console.log('Tu peux boire de la bière en Allemagne.');
	    break;
	  default:
	    console.log('Rien pour toi cette année.');
	}
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  for (let x = 0; x < 100; x += 2 ) {
    console.log(x);
}
for (let i = 0, j = 1; i < 4 && j < 3; i++, j++) {
  console.log(i, j);
}


let texte = "";
  for (let i = 0; i < 3; i++) {
    if (i === 1) {
      continue;
    }
    texte += i;
  }
  console.log(texte);

let i = 11;
do {
  i++;
  console.log(i);
} while (i < 10);

let Voiture = {
  couleur: 'Bleu',
  puissance: 6,
  type: 'Berline'
};
console.log(Voiture);

let maPhrase = 'Salut toi !';
console.log(maPhrase);
console.log(maPhrase.includes('toi'));

let Phrase = ('Comment ça va ?');
let p2 ='';
for (let i= Phrase.length-1; i >= 0; i--) {
  p2 += Phrase.charAt(i);
}
console.log(p2);

Afficher sa phrase à l'envers


let maPhrase =('Salut tout le monde');
let i = maPhrase.lenght;
while(i>=0){
  console.log(maPhrase.chartAt(i));
  i--;
}
for (let y = 100, let x=0 y < 0; y -= 2 let x = 0; x < 100; x += 2 ) {
  console.log(x);
}
fait afficher les chiffres de 0 a 100 pairs et 99 - 1 impairs

for (let x = 0; x < 100; x += 2 ) {
    console.log(x);
  }
let x = 0;
let y = 100;
do {
  x += 2;
  console.log(x);
} while (x>0)


if ((x < 100) && (y > 0)){
  x += 2; y -=2
} console.log(x,y);

function inverse(ma_fhrase){
  let i = ma_fhrase.length -1;
  while(i>=0) {
    console.log(ma_fhrase.charAt(i));
    i--;
  }
}
inverse('salut');

function inverse(ma_phrase){
  let i = ma_phrase.length -1;
  while(i>=0) {
    console.log(ma_phrase.charAt(i));
    i--;
  }
}
inverse('salut');
inverse('Bonjour');

var caActuel = 45000;
var caPrecedent = 50000;
var anneeActuelle = 2018;
var reduction = 0;
  if( (30000 < caActuel) && (caActuel< 60000)) {
    reduction = 0.1;
  }
  else if (((20000 < caActuel ) && ( caActuel < 29999) && (caPrecedent <= 50000))) {
    reduction = 0.2;
  }
  if (((anneeActuelle % 4) == 0) && ((anneeActuelle % 100) != 0) || ((anneeActuelle % 400) == 0)) {
    reduction = reduction + 0.05;
  } console.log("Il a le droit à "+ (reduction * 100  ) + "% et cela equivaut a " + (caActuel * reduction) + "€ ");




function estBissextile (annee) {
    return ((annee%4 ==0) && !(annee %100 == 0) || (annee %400==0));
}
function estTranche1(ca){
  return (ca >= 30000) && (ca <= 60000);
}
function estTranche2(caEnCours, caPrecedent){
  return ((caEnCours >= 20000) && (caEnCours <= 20999)) && (caPrecedent <= 50000);
}
function calculReduction(ca2020, ca2019, anneeEnCours){
  let reduc = 0;
  if (estTranche1(ca2020)) {
      reduc = 10;
  }
  if (estTranche2(ca2020,ca2019)) {
      reduc = 20;
  }
  if (estBissextile(anneeEnCours)) {
      reduc += 5;
  }
  return reduc;
}
let reduc = calculReduction(50000, 20222, 2018);
console.log(reduc +'% ce qui correspond à '+((50000*reduc)/100)+ ' €');

///// Fonction simplifiée calcul CA

function bissextile(i){
  if (((i % 4) == 0) && ((i % 100) != 0) || ((i % 400) == 0)) {
  return true;
 }
  else {
    return false;
    }
  }
  console.log(bissextile(2018));

  function annee(i){
    return (((i % 4) == 0) && ((i % 100) != 0) || ((i % 400) == 0))

    for let i=2000; i <= 2020; i++ {
      console.log(i + ' '+(est bissextile(i))? 'est bissextile' : 'n\'est pas bissextile'))
    }
console.log(annee(2018));
Fonction pour savoir si l'anneé est bissextile, pour simplifier remplacer if par return





function inverse(ma_phrase) {
  let reverse = '';
  for (let i = ma_phrase.length; i >= 0; i--) {
    reverse = reverse + ma_phrase.charAt(i);
  }
  return reverse
}
console.log(inverse('sacalllls'));

function lindrome(mot) {
  return inverse(mot) == mot
}
console.log(lindrome('kayak'))


//////Fonction Palindrome

let monTableau = ["Rouge", true, 8]
console.log(monTableau[0]);

console.log(monTableau[monTableau.length-1])
console.log(monTableau.join(''))

///// Tout coller

let maChaine = "Hello World !";
console.log(maChaine.split(''));

//// Transforme une chaîne en tableau 

monTableau.unshift('Element du début');
console.log(monTableau);

///// Ajoute element au début

monTableau.push('Element à la fin');
console.log(monTableau);

//// Ajoute element a la fin

monTableau.pop();
console.log(monTableau);

//// Supprime premier element

monTableau.shift();
console.log(monTableau);

// Supprime dernier element 

let monTableau = [1,5,1,0,2,8,5,2,5,9];

function tableauPaire(paire) = ['']; {
  for (i = 0) {
    if (i % 2 == 0){
    console.log(tableauPaire(tableauPaire(i)))
    }
  }
} 



function tableauPaire(pair) {
  let newTableau= []; 
    pair.forEach(function(element) {
      if (element % 2 === 0){
        newTableau.push(element)
      } 
    });
  return newTableau;
}
  console.log(tableauPaire([1,2,3,4,5,6,7,8]));


// fonction + tableau vide boucle paire oui / paire stock push