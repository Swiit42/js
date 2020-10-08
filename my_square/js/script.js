
var x = 0;
var y = 0;
const mySquare = document.getElementById('boite');
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowRight') {
    x++;
    mySquare.style.left = x + 'px';
  }
  if (e.key === 'ArrowLeft') {
    x--;
    mySquare.style.left = x + 'px';

  }
  if (e.key === 'ArrowUp') {
    y--;
    mySquare.style.top = y + 'px';

  }
  if (e.key === 'ArrowDown') {
    y++;
    mySquare.style.top = y + 'px';

  }
  console.log(e.key);

});

  // if(x+50 >= 200 && y+50 >= 150);





  //{
//     document.querySelector('#message').textContent = 'Collision';
//   }
//     document.querySelector('.square').style.left = x + 'px';
//     document.querySelector('.square').style.top = y + 'px';
//     document.querySelector('#one').textContent = x + 'px';
//     document.querySelector('#two').textContent = y + 'px';
//   console.log(e.key);
// });
