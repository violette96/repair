var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(closed, 5000);
});

close.addEventListener('click', closed());
function closed() {

   modal.classList.remove('modal_active');
};