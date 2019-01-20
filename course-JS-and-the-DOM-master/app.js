// select h6 heading with class 'text-center'
const communityHeading = document.querySelector('h6.text-center');

// set font size
communityHeading.style.fontSize = '2em';

// set color
communityHeading.style.color = 'purple';


// adding an event listener for click
document.addEventListener('click', function() {
  console.log('The page was clicked.');

  const mainHeading = document.querySelector('h1');

  mainHeading.style.backgroundColor = 'red';
})


// keypress event listener
document.body.addEventListener('keypress', function () {
  console.log('removing first child');
  document.querySelector('#contain-all').firstElementChild.remove();
});

// event listener on the document for a click
document.addEventListener('click', function (event) {
  console.log(event);
});
