var card_ui = document.querySelector('.card');

card_ui.click = function(){
  var href = location.href;
  console.log(href);
  window.location = 'http://cafe.naver.com/csslick';
}
