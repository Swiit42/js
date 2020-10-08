// var age = 28;
//
// if(age > 18){
//   console.log('L\'utilisateur est majeur');
// }
// else if(age == 18){
//   console.log('Egale à 18');
// }
// else {
//   console.log('L\'utilisateur est mineur');
// }
// switch(age){
// case 20:
//   console.log('20 ans');
//   break;
// case 12:
//   console.log('12 ans');
//   break;
// default:
//   console.log('ni 12 ni 20 ans');
//   break;
//   }
// var  conditionDeTest = '1';
// if(conditionDeTest) {
//   console.log('Vrai');
// }else{
//   console.log('Faux');
// }
// var anneeAujourdhui = 2020;
// var anneeNaissance = prompt('Quelle est votre année de naissance?');
// var ageUtilisateur = (anneeAujourdhui - anneeNaissance);
// var moisAujourdhui = 09;
//
// console.log(anneeAujourdhui);
// if (ageUtilisateur > 18){
//   console.log('L\'utilisateur est majeur');
// } else if (ageUtilisateur < 18) {
//   console.log('L\'utilisateur est mineur');
// } else {
//   var moisAujourdhui = 09;
//   var moisNaissance = prompt('Quel est votre mois de naissance?');
//   if (moisNaissance > moisAujourdhui){
//     console.log('L\'utilisateur est né cette année et est mineur');
//   } else{
//     console.log('L\'utilisateur est né cette année et est majeur');
//   }
// }

// // var annee = prompt ('Quelle année?');
//   if (((annee % 4) == 0) && ((annee % 100) != 0) || ((annee % 400) == 0)){
//   console.log('L\'année est bissextile');
// } else {
//   console.log('L\'année n\'est pas bissextile')
// }
var caActuel = 44000;
var caPrecedent = 50000;
var anneeActuelle = 2018;
var reduction = 0;
  if( (30000 < caActuel) && (caActuel< 60000)) {
    reduction = 0.1;
  }
  else if (((20000 < caActuel ) && ( caActuel < 50000) && (caPrecedent < 50000))) {
    reduction = 0.2;
  }
  if (((anneeActuelle % 4) == 0) && ((anneeActuelle % 100) != 0) || ((anneeActuelle % 400) == 0)) {
    reduction = reduction + 0.05;
  } console.log("Il a le droit à "+ (reduction * 100) + "% et cela equivaut a " + (caActuel * reduction) + "€ ");
