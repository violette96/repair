/* Обработка и отправка через AJax */
$('#offer-form').on('submit', function(event) {
 event.preventDefault(); 
 $.ajax({
 url: 'mail.php',
 type: 'POST',
 data: $(this).serialize(), 
 success: function(data) {
  $('.success').fadeIn(2000);
  $('.success').text('Спасибо за заявку, скоро мы Вам перезвоним.');
  $('.success').fadeOut(5000);
  $(`#offer-form  input`).val('');
},
error: function(jqXHR, textStatus) {
  console.log(jqXHR + ': ' + textStatus);
}
});

});
