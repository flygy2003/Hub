import React, {Component} from "react";
var io = require('johnny-five.js')


class Cards extends Component {
  render() {
    var board = new io.Board();

    board.on("ready", function() {
      // Create a standard `led` component instance
      var led = new io.Led(13);
      // "blink" the led in 500ms
      // on-off phase periods
      led.blink(500);
    });
    return (
        <div id="wrapper-div">
          <Edit/>
        </div>
    )
  }
}
class Edit extends Component {
  render() {
    return(
      <Card>
        <span>hi</span>
      </Card>
    )
  }
}

class Card extends Component {
  render() {
    return(
      <div className="card-container">
        {this.props.children}
      </div>
    )
  }
}

export default Cards
