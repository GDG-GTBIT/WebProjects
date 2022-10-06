import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

    this.change_count = this.change_count.bind(this);

    // Defining a default a state object

    this.state = {
      count: this.props.initial,
    };
  }

  change_count() {
    this.setState((prevState) => {
      return {
        count: prevState.count,

        // Here we get access to current state object and then we can use it here

        // Here the count does not change right away because this are asynchronous in nature and React after finding out the minimum changes and then re-rendering it updates the count and if we using multiple setState functions in a function then we should always have access to prevState and thus using it becomes efficient at that time because we directly access the this and we are having 2 setState in a function then we are not using the updated value of 1st setState in the 2nd setState object
      };
    });

    // this.setState({count:this.state.count})

    // We could use this syntax also like directly passing the updated object without calling a callback
  }

  increment() {
    this.state.count++;

    this.change_count();

    // This will auto render the component and just we need to provide the attributes we want to change
  }

  decrement() {
    this.state.count--;

    this.change_count();
  }

  reset() {
    this.state.count = 0;

    this.change_count();
  }

  render() {
    return (
      <div>
        <button onClick={this.decrement}>-1</button>
        {" " + this.state.count + " "}
        <button onClick={this.increment}>+1</button>
        {"  "}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
