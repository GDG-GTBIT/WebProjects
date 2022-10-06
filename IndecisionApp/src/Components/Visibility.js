import React from "react";
export default class Visibility extends React.Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);

    this.state = {
      hidden: true,
    };
  }

  change() {
    this.setState((prevState) => {
      return {
        hidden: !prevState.hidden,
      };
    });
  }

  render() {
    return (
      <div>
        <p>
          <b>Visibility Toggle</b>
        </p>
        <button onClick={this.change}>
          {this.state.hidden ? "Show" : "Hide"} Details
        </button>
        <p>{this.state.hidden ? "" : "Hey the Content is visible"}</p>
      </div>
    );
  }
}
