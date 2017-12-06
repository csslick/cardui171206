var card_ui = document.querySelectorAll('.card');

for (var i=0; i < card_ui.length; i++){
  card_ui[i].onclick = function(){
    window.location = 'http://cafe.naver.com/csslick';
  }
  console.log(i);
}
