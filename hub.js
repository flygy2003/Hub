var io = require('johnny-five.js')
var board = new io.Board();

board.on("ready", function() {
  // Create a standard `led` component instance
  var led = new io.Led(13);
  // "blink" the led in 500ms
  // on-off phase periods
  led.blink(500);
});
