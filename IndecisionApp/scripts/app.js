"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./feedPost");

var _utils = require("./utils");

var _utils2 = _interopRequireDefault(_utils);

var _validator = require("validator");

var _validator2 = _interopRequireDefault(_validator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options1 = ["Eat", "Sleep", "Code", "Repeat"];
var options2 = ["Eat", "Sleep", "Work"];

var func1 = function func1() {
  console.log(this);
};

var func2 = function func2() {
  console.log(undefined);
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

var Header = function Header(props) {
  console.log("Hello Rendered Header");

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h1",
      null,
      props.heading
    ),
    _react2.default.createElement(
      "h3",
      null,
      props.caption
    ),
    _react2.default.createElement(
      "p",
      null,
      props.organization
    )
  );
};

Header.defaultProps = {
  heading: "Some default Heading",
  caption: "Some default Caption",
  organization: "Some default Organization"
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

var Action = function Action(props) {
  console.log("Hello Rendered Action");

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "button",
      { onClick: props.ChooseOption, disabled: !props.OptionsAvail },
      "What should I do ?"
    )
  );
};

var Option = function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    _classCallCheck(this, Option);

    var _this = _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));

    _this.delete = _this.delete.bind(_this);
    return _this;
  }

  _createClass(Option, [{
    key: "delete",
    value: function _delete(e) {
      this.props.DeleteOption(this.props.el);
      // console.log(e.target.closest("label").textContent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log(this.props.el + " Option got unomounted");
    }
  }, {
    key: "render",
    value: function render() {
      // console.log(this.props);

      console.log("Hello Rendered Option");
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "label",
          null,
          this.props.el
        ),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null),
        _react2.default.createElement(
          "button",
          { onClick: this.delete },
          "Remove"
        )
      );
    }
  }]);

  return Option;
}(_react2.default.Component);

Option.defaultProps = {
  el: "Some default option",
  DeleteOption: function DeleteOption(el) {
    console.log(el);

    console.log("Some delete function");
  }
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

var Options = function Options(props) {
  console.log("Hello rendered Options");

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      null,
      props.options.length > 0 ? "Here are your options" : "Add options to get started"
    ),
    props.options.length > 0 ? _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        "button",
        { onClick: props.DeleteAllOptions },
        "Remove All"
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null)
    ) : null,
    _react2.default.createElement(
      "ol",
      null,
      props.options.map(function (mov, i) {
        return _react2.default.createElement(
          "li",
          { key: i + 1 },
          _react2.default.createElement(Option, { el: mov, DeleteOption: props.DeleteOption }),
          _react2.default.createElement("br", null)
        );
      })
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));
    // This has access to props object


    _this2.HandleFormSubmit = _this2.HandleFormSubmit.bind(_this2);
    _this2.genError = _this2.genError.bind(_this2);

    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "genError",
    value: function genError(error) {
      this.setState({ error: error });
    }
  }, {
    key: "HandleFormSubmit",
    value: function HandleFormSubmit(e) {
      console.log(this);

      // Here this does not acts like normal methods of a class and this is undefined for this function and this happens due to some functionalities in  React and therefore we need to bind this keyword

      e.preventDefault();

      var enteredText = e.target.elements.Option.value;
      e.target.elements.Option.blur();
      enteredText = enteredText.trim();

      // This removes the trailing space

      e.target.elements.Option.value = "";

      if (!enteredText) {
        this.genError("Make sure you enter a valid value");
        return;
      }

      var error = this.props.AddOption(enteredText);

      if (error) this.genError(error);else this.genError(undefined);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("Hello Rendered Add Option");
      return _react2.default.createElement(
        "form",
        { onSubmit: this.HandleFormSubmit },
        _react2.default.createElement("input", { type: "text", name: "Option", placeholder: "Add an option " }),
        _react2.default.createElement(
          "button",
          null,
          "Add"
        ),
        this.state.error ? _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement("br", null),
          _react2.default.createElement(
            "p",
            null,
            this.state.error
          )
        ) : null
      );
    }
  }]);

  return AddOption;
}(_react2.default.Component);

var Counter = function (_React$Component3) {
  _inherits(Counter, _React$Component3);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this3 = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this3.increment = _this3.increment.bind(_this3);
    _this3.decrement = _this3.decrement.bind(_this3);
    _this3.reset = _this3.reset.bind(_this3);

    _this3.change_count = _this3.change_count.bind(_this3);

    // Defining a default a state object

    _this3.state = {
      count: _this3.props.initial
    };
    return _this3;
  }

  _createClass(Counter, [{
    key: "change_count",
    value: function change_count() {
      this.setState(function (prevState) {
        return {
          count: prevState.count

          // Here we get access to current state object and then we can use it here

          // Here the count does not change right away because this are asynchronous in nature and React after finding out the minimum changes and then re-rendering it updates the count and if we using multiple setState functions in a function then we should always have access to prevState and thus using it becomes efficient at that time because we directly access the this and we are having 2 setState in a function then we are not using the updated value of 1st setState in the 2nd setState object
        };
      });

      // this.setState({count:this.state.count})

      // We could use this syntax also like directly passing the updated object without calling a callback
    }
  }, {
    key: "increment",
    value: function increment() {
      this.state.count++;

      this.change_count();

      // This will auto render the component and just we need to provide the attributes we want to change
    }
  }, {
    key: "decrement",
    value: function decrement() {
      this.state.count--;

      this.change_count();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.state.count = 0;

      this.change_count();
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "button",
          { onClick: this.decrement },
          "-1"
        ),
        " " + this.state.count + " ",
        _react2.default.createElement(
          "button",
          { onClick: this.increment },
          "+1"
        ),
        "  ",
        _react2.default.createElement(
          "button",
          { onClick: this.reset },
          "Reset"
        )
      );
    }
  }]);

  return Counter;
}(_react2.default.Component);

Counter.defaultProps = {
  initial: 0
};

var Visibility = function (_React$Component4) {
  _inherits(Visibility, _React$Component4);

  function Visibility(props) {
    _classCallCheck(this, Visibility);

    var _this4 = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

    _this4.change = _this4.change.bind(_this4);

    _this4.state = {
      hidden: true
    };
    return _this4;
  }

  _createClass(Visibility, [{
    key: "change",
    value: function change() {
      this.setState(function (prevState) {
        return {
          hidden: !prevState.hidden
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement(
            "b",
            null,
            "Visibility Toggle"
          )
        ),
        _react2.default.createElement(
          "button",
          { onClick: this.change },
          this.state.hidden ? "Show" : "Hide",
          " Details"
        ),
        _react2.default.createElement(
          "p",
          null,
          this.state.hidden ? "" : "Hey the Content is visible"
        )
      );
    }
  }]);

  return Visibility;
}(_react2.default.Component);

var IndecisionApp = function (_React$Component5) {
  _inherits(IndecisionApp, _React$Component5);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this5 = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this5.DeleteAllOptions = _this5.DeleteAllOptions.bind(_this5);
    _this5.ChooseOption = _this5.ChooseOption.bind(_this5);
    _this5.AddOption = _this5.AddOption.bind(_this5);
    _this5.DeleteOption = _this5.DeleteOption.bind(_this5);

    _this5.state = {
      options: _this5.props.options ? _this5.props.options : []
    };
    return _this5;
  }

  _createClass(IndecisionApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log("Indecision Component Added to the DOM");

      // After rendering only the Component gets mounted which is quite logical
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      // Here we get access to previous Props and previous State of the Component

      if (prevState.options.length != this.state.options.length) localStorage.setItem("options", JSON.stringify(this.state.options));
      console.log("Component Updated");

      // This lifecycle method will be called whenver setState methods are callled because they are the ones who re-render the Component that is when states are changed
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("Decision App Unmounted");
    }
  }, {
    key: "DeleteAllOptions",
    value: function DeleteAllOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "ChooseOption",
    value: function ChooseOption() {
      var randomNum = Math.trunc(Math.random() * this.state.options.length);
      alert("You can take this option : " + this.state.options[randomNum]);
    }
  }, {
    key: "AddOption",
    value: function AddOption(option) {
      var _this6 = this;

      option = option.slice(0, 1).toUpperCase() + option.slice(1).toLowerCase();
      if (this.state.options.includes(option)) return "Option Already Added";
      this.setState(function () {
        return {
          options: [].concat(_toConsumableArray(_this6.state.options), [option])
        };
      });
    }
  }, {
    key: "DeleteOption",
    value: function DeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (mov) {
            return mov != option;
          })
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this);

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(Header, {
          heading: "Indecision App",
          organization: "Sigma",
          caption: "Put your life in the hands of a Computer"
        }),
        _react2.default.createElement(Action, {
          ChooseOption: this.ChooseOption,
          OptionsAvail: this.state.options.length
        }),
        _react2.default.createElement(Options, {
          options: this.state.options,
          DeleteAllOptions: this.DeleteAllOptions,
          DeleteOption: this.DeleteOption
        }),
        _react2.default.createElement(AddOption, { AddOption: this.AddOption }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(Counter, { initial: 10 }),
        _react2.default.createElement("br", null),
        _react2.default.createElement("br", null),
        _react2.default.createElement(Visibility, null),
        _react2.default.createElement(Option, null)
      );
    }
  }]);

  return IndecisionApp;
}(_react2.default.Component);

var app_jsx = _react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(Header, null),
  _react2.default.createElement(Action, null),
  _react2.default.createElement(Options, null),
  _react2.default.createElement(AddOption, null)
);

_reactDom2.default.render(_react2.default.createElement(IndecisionApp, {
  options: function () {
    try {
      return JSON.parse(localStorage.getItem("options"));
    } catch (error) {
      return [];
    }
  }()
}), document.querySelector(".main-container"));

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

var Labor = function Labor(props) {
  // This is simply like render function

  // We can avoid using classes where we don't need states
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "p",
      null,
      "Name : ",
      props.name
    ),
    _react2.default.createElement(
      "p",
      null,
      "Age : ",
      props.age
    ),
    _react2.default.createElement(
      "p",
      null,
      "Skills : ",
      props.skills
    )
  );
};

_reactDom2.default.render(_react2.default.createElement(Labor, { name: "ABC", age: 25, skills: ["Farming , ", "Delivery Boy "] }), document.querySelector(".labor-info"));

// IN React if the element is written in lower case then it takes it has html element and defines the name in React.Createelement as a string

// We can also assign some default props

// Whenever you select an component in React dev tools it will show ==$r on beside of the component
// Just typing $r in console you can get the component and its properties displayed at the console

var a = function a() {};
// This is a function which will return undefined
var b = function b() {
  return {};
};
// This will return the object
var c = function c() {
  return [];
};

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

// As print is not a named export so we cannot access it using it's name instead we access it outside the curly braces

// console.log(
//   "shaktisantosh.nayak2021@vitstudent.ac.in Validity : ",
//   validator.isEmail("shaktisantosh.nayak2021@vitstudent.ac.in")
// );

// Importing a npm module

console.log("Index : ", (0, _utils.binSearch)([1, 2, 3, 4], 3));
console.log((0, _utils2.default)());
console.log((0, _utils.intro)());

// console.log(info.name);

console.log("nshakti.10@gmail.com Validity : ", _validator2.default.isEmail("nshakti.10@gmail.com"));

// In order to convert the JSX into regualar javscript using webpack we need to mention some loaders in the config file of webpack

// This babel-loader teaches the webpack how to interact with the files and to convert ES6 to ES5
