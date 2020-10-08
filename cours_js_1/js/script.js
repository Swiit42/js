let maSection = document.getElementById('maSection');
console.log(maSection);


let paragraphes = document.getElementsByTagName('p');
console.log(paragraphes);

let red = document.getElementsByClassName('red');
console.log(red);

let query = document.querySelector('#maSection');
let queryAll = document.querySelectorAll('.red, section');
console.log(query, queryAll);



let selectP = document.querySelectorAll('#maSection2 > div p:first-child');
console.log(selectP);

let select = document.querySelector('#maSection2 p');
console.log(select.parentNode);

 let monDernierLien = document.querySelector('#divParent p a:last-child');
 console.log(monDernierLien)


console.log(monDernierLien.parentNode
    .parentNode
    .parentNode
    .nextElementSibling)
    .firstElementChild
    .firstElementChild
    .nextElementSibling
    .firstElementChild);k
    console.log(monDernierLien);    
// // selectionner le 1er0 paragraphe 2eme section

// // let nouveauLien = document.createElement('a');
// // nouveauLien.href = 'https://google.fr';
// // // ou
// // // nouveauLien.setAttribute('href', 'https://google.fr');
// // nouveauLien.innerHTML= 'Lien 1.4';
// // console.log(nouveauLien);

// // // document.querySelector('#divParent p a:last-child').appendChild(nouveauLien);

// // // On doit cibler le noeud parent de reference afin de lui indiquer quel noeud (nouveauLien) 
// // //doit-être inséré avant quel autre noeud (ici on cible le premier élément de la liste)
// // document.querySelector('#divParent p:first-child').insertBefore(
// //     nouveauLien,
// //     document.querySelector('#divParent p a:last-child')
// //   );

// //   document.querySelector('#divParent p a:first-child').removeChild
// //   (
// //       document.querySelector('#divParent p a:first-child')
// //   );