$(document).ready(function(){
 var button = $('#button');
 var modal = $('#modal');
 var close = $('#close');
 var cardLink = $('.card__link')
 
 button.on('click', function(){
  modal.addClass('modal_active');
 });

 /* cardLink.on('click', function(event){
  event.preventDefault()// это функция, которая отключает станадартное поведение ссылки
  modal.addClass('modal_active');
  var target = $(this).attr('data-target');
  $('.modal-content').load(target+.html);
 });
 */
 close.on('click', function(){
  modal.removeClass('modal_active');

 });
});
