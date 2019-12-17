M.AutoInit();
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});
$(".images").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });