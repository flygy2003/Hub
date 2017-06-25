import React, {Component} from "react";

class Cards extends Component {
  render() {
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
