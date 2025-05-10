

const buttons = document.querySelectorAll('.button');
// const b = document.querySelector('.eg')
// let x=b.children
// let y= Array.from(x);
// console.log(x);
// y.forEach(element => {
//   console.log(element.attributes[1].value);
// });
const body = document.querySelector('body');

buttons.forEach(function (button) {
 // console.log(button);
  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
  //console.log('Click listener added to:', button.id);
});

