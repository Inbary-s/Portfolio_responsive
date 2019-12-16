M.AutoInit();
$(".images").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });