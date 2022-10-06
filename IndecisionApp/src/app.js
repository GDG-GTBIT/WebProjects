import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Components/Counter";
import AddOption from "./Components/AddOption";
import validator from "validator";

import Header from "./Components/Header";

import Modal from "react-modal";

import Visibility from "./Components/Visibility";

import "normalize.css/normalize.css";
// Now our styling will be same in all browsers

import "./styles/style.scss";

import "./feedPost";

let options1 = ["Eat", "Sleep", "Code", "Repeat"];
let options2 = ["Eat", "Sleep", "Work"];

let func1 = function () {
  console.log(this);
};

let func2 = () => {
  console.log(this);
};

func1();
func2();

// localStorage.setItem("options", JSON.stringify(options1));

/*
class Header extends React.Component {
  render() {
    // We need to define this special function inside a component in order to render the jsx of the header
    // console.log(this.props);
    // this object has all the access to the attributes we define while making the instance of the Header


    console.log("Hello Rendered Header");

  return (
    <div>
      <h1>{this.props.heading}</h1>
      <h3>{this.props.caption}</h3>
      <p>{this.props.organization}</p>
    </div>
  );
  }
}
*/

// Stateless functional component

Header.defaultProps = {
  heading: "Some default Heading",
  caption: "Some default Caption",
  organization: "Some default Organization",
};

// class Action extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       options: this.props.options,
//     };
//   }

//   render() {
//     console.log("Hello Rendered Action");

//     return (
//       <div>
//         <button
//           onClick={this.props.ChooseOption}
//           disabled={!this.props.OptionsAvail}
//         >
//           What should I do ?{" "}
//         </button>
//       </div>
//     );
//   }
// }

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete(e) {
    this.props.DeleteOption(this.props.el);
    // console.log(e.target.closest("label").textContent);
  }

  componentWillUnmount() {
    console.log(`${this.props.el} Option got unomounted`);
  }

  render() {
    // console.log(this.props);

    console.log("Hello Rendered Option");
    return (
      <div className="widget__option">
        <h3>{this.props.el}</h3>
        <button className="btn button--link" onClick={this.delete}>
          Remove
        </button>
      </div>
    );
  }
}

Option.defaultProps = {
  el: "Some default option",
  DeleteOption(el) {
    console.log(el);

    console.log("Some delete function");
  },
};

const Options = (props) => {
  console.log("Hello rendered Options");

  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button className="btn button--link" onClick={props.DeleteAllOptions}>
          Remove All
        </button>
      </div>
      {props.options.length > 0 ? null : (
        <div className="OptionAvaialability">
          <h3>{"Add options to get started"}</h3>
        </div>
      )}

      <ol>
        {props.options.map((mov, i) => (
          <li key={i + 1}>
            <Option el={mov} DeleteOption={props.DeleteOption}></Option>
          </li>
        ))}
      </ol>
    </div>
  );
};

let Action = (props) => {
  console.log("Hello Rendered Action");

  return (
    <div>
      <button
        className="action__btn"
        onClick={props.ChooseOption}
        disabled={!props.OptionsAvail}
      >
        What should I do ?
      </button>
    </div>
  );
};

// class Options extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     // console.log(this.props);

//     console.log("Hello rendered Options");

//     return (
//       <div>
//         <p>
//           {this.props.options.length > 0
//             ? "Here are your options"
//             : "No options"}
//         </p>
//         {this.props.options.length > 0 ? (
//           <div>
//             <br />
//             <button onClick={this.props.DeleteAllOptions}>Remove All</button>
//             <br />
//             <br />
//           </div>
//         ) : null}
//         <ol>
//           {this.props.options.map((mov, i) => (
//             <Option
//               key={i + 1}
//               el={mov}
//               DeleteOption={this.props.DeleteOption}
//             ></Option>
//           ))}
//         </ol>
//       </div>
//     );
//   }
// }

Counter.defaultProps = {
  initial: 0,
};

let ChosedOptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Chosed Option"
    onRequestClose={props.CloseModal}
    closeTimeoutMS={500}
    className="modal"
  >
    <h3 className="modal__title">Here is the Option !! You must try</h3>
    <p className="modal__body">
      According to Computer , You should try {props.selectedOption}
    </p>
    <button className="btn" onClick={props.CloseModal}>
      OK
    </button>
  </Modal>
);

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.DeleteAllOptions = this.DeleteAllOptions.bind(this);
    this.ChooseOption = this.ChooseOption.bind(this);
    this.AddOption = this.AddOption.bind(this);
    this.DeleteOption = this.DeleteOption.bind(this);

    this.state = {
      options: this.props.options ? this.props.options : [],
      selectedOption: undefined,
    };
  }

  componentDidMount() {
    console.log("Indecision Component Added to the DOM");

    // After rendering only the Component gets mounted which is quite logical
  }

  componentDidUpdate(prevProps, prevState) {
    // Here we get access to previous Props and previous State of the Component

    if (prevState.options.length != this.state.options.length)
      localStorage.setItem("options", JSON.stringify(this.state.options));
    console.log("Component Updated");

    // This lifecycle method will be called whenver setState methods are callled because they are the ones who re-render the Component that is when states are changed
  }

  componentWillUnmount() {
    console.log("Decision App Unmounted");
  }

  DeleteAllOptions() {
    this.setState(() => {
      return {
        options: [],
      };
    });
  }

  ChooseOption() {
    let randomNum = Math.trunc(Math.random() * this.state.options.length);

    this.setState({ selectedOption: this.state.options[randomNum] });
    // alert(`You can take this option : ${this.state.options[randomNum]}`);
  }

  CloseModal = () => {
    this.setState({ selectedOption: undefined });
  };

  AddOption(option) {
    option = option.slice(0, 1).toUpperCase() + option.slice(1).toLowerCase();
    if (this.state.options.includes(option)) return "Option Already Added";
    this.setState(() => ({
      options: [...this.state.options, option],
    }));
  }

  DeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter((mov) => mov != option),
    }));
  }

  render() {
    console.log(this);

    return (
      <div class="main-app">
        <Header
          heading="Indecision App"
          organization="Sigma"
          caption="Put your life in the hands of a Computer"
        />

        <div className="container">
          <Action
            ChooseOption={this.ChooseOption}
            OptionsAvail={this.state.options.length}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              DeleteAllOptions={this.DeleteAllOptions}
              DeleteOption={this.DeleteOption}
            ></Options>

            {/* We can do this way as well*/}
            <AddOption AddOption={this.AddOption} />
          </div>
          <br />
          <Counter initial={10} />
          <br />
          <br />
          <Visibility />
          <Option />
        </div>
        <ChosedOptionModal
          selectedOption={this.state.selectedOption}
          CloseModal={this.CloseModal}
        />
      </div>
    );
  }
}

let app_jsx = (
  <div>
    <Header />
    {/* This is how we render the  Header component 
  This uppercase thing helps react to differentiate from the normal html element and a container
  */}
    <Action />
    <Options />
    <AddOption />
  </div>
);

ReactDOM.render(
  <IndecisionApp
    options={(() => {
      try {
        return JSON.parse(localStorage.getItem("options"));
      } catch (error) {
        return [];
      }
    })()}
  />,
  document.querySelector(".main-container")
);

// This is Creating nested Components

// Component props allows the Component to communicate with each other

// Component states are used to re-render the component whenever we make a change in the data

// For Component State

// 1. We need to setup a default state object

// In this default state object we could define as many properties we want or we can leave them as we have been doing for all the components

// 2. Component gets rendered with default state values

// 3. We make changes to state object

// 4. It automatically re-renders the component with the updated state values

// Stateless functional component

//Here we create the components using the function and the component has to be stateless unlike we had in class based components

let Labor = (props) => {
  // This is simply like render function

  // We can avoid using classes where we don't need states
  return (
    <div>
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Skills : {props.skills}</p>
    </div>
  );
};

ReactDOM.render(
  <Labor name={"ABC"} age={25} skills={["Farming , ", "Delivery Boy "]} />,
  document.querySelector(".labor-info")
);

// IN React if the element is written in lower case then it takes it has html element and defines the name in React.Createelement as a string

// We can also assign some default props

// Whenever you select an component in React dev tools it will show ==$r on beside of the component
// Just typing $r in console you can get the component and its properties displayed at the console

let a = () => {};
// This is a function which will return undefined
let b = () => ({});
// This will return the object
let c = () => [];

// This will return an array

// The function we set with onClick will get access to the event object like on Event listeners

// Lifecycle Methods

// This includes methods called on events like when the component is mounted on DOM , when the component is removed from the DOM

// We can lifecycle methods with the class based Components only

// JSON means Javascript object notation

// We use Webpack to bundle all the javascript files and bundle into one javascript file and this file will used at production level
// Also to compile to ES5 , we don't need to use babel separately , it is automatically done by webpack

console.log("Webpack is watching");

// import "./utils";

// Webpack automatically bundles the files which we import at the entry point

import print2, { binSearch } from "./utils";

import { intro as introduction } from "./utils";

// As print is not a named export so we cannot access it using it's name instead we access it outside the curly braces

// console.log(
//   "shaktisantosh.nayak2021@vitstudent.ac.in Validity : ",
//   validator.isEmail("shaktisantosh.nayak2021@vitstudent.ac.in")
// );

// Importing a npm module

console.log("Index : ", binSearch([1, 2, 3, 4], 3));
console.log(print2());
console.log(introduction());

// console.log(info.name);

console.log(
  "nshakti.10@gmail.com Validity : ",
  validator.isEmail("nshakti.10@gmail.com")
);

// In order to convert the JSX into regualar javscript using webpack we need to mention some loaders in the config file of webpack

// This babel-loader teaches the webpack how to interact with the files and to convert ES6 to ES5

console.log("webpack-dev-server is running");

// babel-plugin-transform-class-properties is a plugin and using this we can declare class properties without the need of the constructor and also no need of binding this keyword for each method in Component

class Oldsyntax {
  #password = "123456";
  constructor() {
    this.greeting = "Hello World";
  }

  getpassword() {
    return this.#password;
  }

  disp_greeting = () => {
    return this.greeting;
  };
}

class Newsyntax {
  greeting = "Hey ! Whatsup ?";

  disp_greeting = () => {
    return this.greeting;

    // This is we are not setting a method instead we are setting a class property
  };
}

// console.log(new Oldsyntax(), new Newsyntax());

let oldsyntax = new Oldsyntax();
let oldgreet = oldsyntax.disp_greeting;

let newsyntax = new Newsyntax();
let newgreet = newsyntax.disp_greeting;

console.log(oldgreet());
console.log(newgreet());

// Changing all the methods to the arrow functions will save us by keeping on binding the methods of the Component that is classes

//

let Custom = (props) => {
  // {props.content}
  return (
    <div>
      <p>Username</p>

      {props.children}

      <p>User Signature</p>
    </div>
  );
};

// ReactDOM.render(
//   <Custom
//     content={
//       <div>
//         <p>This is Content-1</p>
//       </div>
//     }
//   />,
//   document.querySelector(".labor-info")
// );

// There is another way of doing the same thing my making the children of the component

ReactDOM.render(
  <Custom>
    <p>This is Content-2</p>
  </Custom>,
  document.querySelector(".labor-info")
);

// This CSS loader is used to convert the scss into css
// This style loader is used to inject the css in javascript into dom

// This sass loader will help to import the sass files
// This node sass will help to compile down the scss into regular css which the browser can understand

// We define reset css just to make ensure that all the browser start from the same place

// That is each browser has own set of defaults and thus we don't want it to disturb our styles so we use css resets

// And the css reset we are going to use is normalize.css
