
$(".link-button").each(function(index, elm) {
  var scrollWidth = -300;
  var offset = index * scrollWidth;
  var container = $(".flex-container");
  var marginLeft = offset + "px";
  $(elm).click(function(e) {
    e.preventDefault();
    container.css("margin-left", marginLeft);
  });
});