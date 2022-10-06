import React from "react";
export default class AddOption extends React.Component {
  constructor(props) {
    // This has access to props object
    super(props);

    this.HandleFormSubmit = this.HandleFormSubmit.bind(this);
    this.genError = this.genError.bind(this);

    this.state = {
      error: undefined,
    };
  }

  genError(error) {
    this.setState({ error });
  }
  HandleFormSubmit(e) {
    console.log(this);

    // Here this does not acts like normal methods of a class and this is undefined for this function and this happens due to some functionalities in  React and therefore we need to bind this keyword

    e.preventDefault();

    let enteredText = e.target.elements.Option.value;
    e.target.elements.Option.blur();
    enteredText = enteredText.trim();

    // This removes the trailing space

    e.target.elements.Option.value = "";

    if (!enteredText) {
      this.genError("Make sure you enter a valid value");
      return;
    }

    let error = this.props.AddOption(enteredText);

    if (error) this.genError(error);
    else this.genError(undefined);
  }

  render() {
    console.log("Hello Rendered Add Option");
    return (
      <form onSubmit={this.HandleFormSubmit} className="add-option-form-tag">
        {/* Binding over here is not efficient as whenever we re-render the thing then always it is going to bind again and again and instead in the constructor we bind things */}
        <div className="add-option-form">
          <input type="text" name="Option" placeholder="Add an option " />
          <button className="btn">Add</button>
        </div>

        {this.state.error ? (
          <p className="add-option-error">{this.state.error}</p>
        ) : null}
      </form>
    );
  }
}
