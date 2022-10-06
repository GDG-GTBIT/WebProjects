"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostImage = function (_React$Component) {
  _inherits(PostImage, _React$Component);

  function PostImage(props) {
    _classCallCheck(this, PostImage);

    return _possibleConstructorReturn(this, (PostImage.__proto__ || Object.getPrototypeOf(PostImage)).call(this, props));
  }

  _createClass(PostImage, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "Post_Image" },
        _react2.default.createElement("img", {
          height: "500px",
          src: this.props.Image_URL,
          onDoubleClick: this.props.onDoubleLikeClick
        })
      );
    }
  }]);

  return PostImage;
}(_react2.default.Component);

var PostActions = function (_React$Component2) {
  _inherits(PostActions, _React$Component2);

  function PostActions(props) {
    _classCallCheck(this, PostActions);

    return _possibleConstructorReturn(this, (PostActions.__proto__ || Object.getPrototypeOf(PostActions)).call(this, props));
  }

  _createClass(PostActions, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("img", {
          className: "like-img post-action-img",
          onClick: this.props.onLikeButtonClick,
          src: !this.props.liked ? "./src/PostImages/Like.png" : "https://media.istockphoto.com/vectors/heartlove-icon-vector-id946685850?k=20&m=946685850&s=170667a&w=0&h=_-fQOcfDtGBufsoj5W3T9MvbdKtRBR3OBqaXUNm2Bn0="
        }),
        _react2.default.createElement("img", {
          className: "comment-img post-action-img",
          src: "C:\\Users\\user\\Desktop\\React Project\\1-React Project\\src\\PostImages/Comment.png"
        }),
        _react2.default.createElement("img", {
          className: "sendPost-img post-action-img",
          src: "C:\\Users\\user\\Desktop\\React Project\\1-React Project\\src\\PostImages/SendPost.png"
        }),
        _react2.default.createElement("img", {
          className: "savePost-img post-action-img",
          src: "C:\\Users\\user\\Desktop\\React Project\\1-React Project\\src\\PostImages/SavePost.png"
        })
      );
    }
  }]);

  return PostActions;
}(_react2.default.Component);

var PostCaption = function (_React$Component3) {
  _inherits(PostCaption, _React$Component3);

  function PostCaption(props) {
    _classCallCheck(this, PostCaption);

    return _possibleConstructorReturn(this, (PostCaption.__proto__ || Object.getPrototypeOf(PostCaption)).call(this, props));
  }

  _createClass(PostCaption, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "post-caption" },
        _react2.default.createElement(
          "p",
          null,
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, odio excepturi in totam porro aut repellat labore iste soluta quam? Officiis quibusdam odit omnis similique qui reiciendis voluptatem voluptatibus consequuntur?"
        )
      );
    }
  }]);

  return PostCaption;
}(_react2.default.Component);

var Post = function (_React$Component4) {
  _inherits(Post, _React$Component4);

  function Post(props) {
    _classCallCheck(this, Post);

    var _this4 = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

    _this4.onDoubleLikeClick = _this4.onDoubleLikeClick.bind(_this4);
    _this4.onLikeButtonClick = _this4.onLikeButtonClick.bind(_this4);

    _this4.state = {
      liked: false
    };
    return _this4;
  }

  _createClass(Post, [{
    key: "onDoubleLikeClick",
    value: function onDoubleLikeClick() {
      this.setState(function () {
        return {
          liked: true
        };
      });
    }
  }, {
    key: "onLikeButtonClick",
    value: function onLikeButtonClick() {
      this.setState(function (prevState) {
        return { liked: !prevState.liked };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { className: "User_Details" },
          _react2.default.createElement(
            "label",
            { className: "user_name" },
            this.props.Username
          )
        ),
        _react2.default.createElement(PostImage, {
          Image_URL: this.props.Image_URL,
          onDoubleLikeClick: this.onDoubleLikeClick
        }),
        _react2.default.createElement("br", null),
        _react2.default.createElement(PostCaption, null),
        _react2.default.createElement(PostActions, {
          onLikeButtonClick: this.onLikeButtonClick,
          liked: this.state.liked
        }),
        _react2.default.createElement("br", null)
      );
    }
  }]);

  return Post;
}(_react2.default.Component);

console.log("This is from Feed");

_reactDom2.default.render(_react2.default.createElement(
  "div",
  null,
  _react2.default.createElement(Post, {
    Username: "shakti_n10",
    Image_URL: "https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }),
  _react2.default.createElement(Post, {
    Username: "shakti_n10",
    Image_URL: "https://images.pexels.com/photos/12800833/pexels-photo-12800833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }),
  _react2.default.createElement(Post, {
    Username: "shakti_n10",
    Image_URL: "https://images.pexels.com/photos/12640007/pexels-photo-12640007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  })
), document.querySelector(".Post"));

console.log("This is another log from feed");
