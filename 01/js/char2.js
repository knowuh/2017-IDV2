
var numChars = 20;
var chars    = [];
var $chars    = [];

function initChars() {
  var $container = $('#container');
  for(var i = 0; i < numChars; i++) {
    var $item = $("<div class='char'>");
    $chars.push($item);
    $container.append($item);
    chars.push('a');
  }
}

function update() {
  var index = Math.round(Math.random() * $chars.length);
  var $char = $chars[index];
  var max = 18000;
  var value = Math.round(Math.random() * max) + 32;
  var char = String.fromCharCode(value);
  $char.html(char);
}
initChars();
update();
setInterval(update,120);