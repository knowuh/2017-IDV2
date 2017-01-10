
console.log("yes");

var $char = $("#char");
var $dec  = $("#dec");
var $hex  = $("#hex");
var $bin  = $("#bin");

function update() {
    var max = 18000;
    var value = Math.round(Math.random() * max) + 32;
    var char = String.fromCharCode(value);
    var dec = value.toString();
    var hex = value.toString(16);
    var bin = value.toString(2);
    $char.html(char);
    $dec.html(dec);
    $hex.html(hex);
    $bin.html(bin);
}
update();
setInterval(update,1500);