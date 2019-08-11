var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');

button.addEventListener('click', function() {
  modal.classList.add('modal_active');
  setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
});

close.addEventListener('click', function() {
   modal.classList.remove('modal_active');
})