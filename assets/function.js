
M.AutoInit();
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  
});
$(".images").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });
  document.addEventListener('scroll', function(){
    var scrolly = window.scrollY;
    if(!scrolly){
      $('.navbar').css('visibility', 'hidden')
    }else{
      console.log('scrolling')
      $('.navbar').css('visibility', 'visible')
    }
  })