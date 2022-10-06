import React from "react";
import ReactDOM from "react-dom";
class PostImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Post_Image">
        <img
          height="500px"
          src={this.props.Image_URL}
          onDoubleClick={this.props.onDoubleLikeClick}
        />
      </div>
    );
  }
}

class PostActions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img
          className="like-img post-action-img"
          onClick={this.props.onLikeButtonClick}
          src={
            !this.props.liked
              ? "../src/PostImages/Like.png"
              : "https://media.istockphoto.com/vectors/heartlove-icon-vector-id946685850?k=20&m=946685850&s=170667a&w=0&h=_-fQOcfDtGBufsoj5W3T9MvbdKtRBR3OBqaXUNm2Bn0="
          }
        />
        <img
          className="comment-img post-action-img"
          src="C:\Users\user\Desktop\React Project\1-React Project\src\PostImages/Comment.png"
        />
        <img
          className="sendPost-img post-action-img"
          src="C:\Users\user\Desktop\React Project\1-React Project\src\PostImages/SendPost.png"
        />
        <img
          className="savePost-img post-action-img"
          src="C:\Users\user\Desktop\React Project\1-React Project\src\PostImages/SavePost.png"
        />
        <p>View Comments</p>
        <form>
          <input placeholder="Add a Comment"></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

// console.log(Todo);
class PostCaption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="post-caption">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
          odio excepturi in totam porro aut repellat labore iste soluta quam?
          Officiis quibusdam odit omnis similique qui reiciendis voluptatem
          voluptatibus consequuntur?
        </p>
      </div>
    );
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.onDoubleLikeClick = this.onDoubleLikeClick.bind(this);
    this.onLikeButtonClick = this.onLikeButtonClick.bind(this);

    this.state = {
      liked: false,
    };
  }

  onDoubleLikeClick() {
    this.setState(() => ({
      liked: true,
    }));
  }

  onLikeButtonClick() {
    this.setState((prevState) => ({ liked: !prevState.liked }));
  }

  render() {
    return (
      <div>
        <div className="User_Details">
          <label className="user_name">{this.props.Username}</label>
        </div>
        <PostImage
          Image_URL={this.props.Image_URL}
          onDoubleLikeClick={this.onDoubleLikeClick}
        ></PostImage>
        <br />
        <PostCaption></PostCaption>
        <PostActions
          onLikeButtonClick={this.onLikeButtonClick}
          liked={this.state.liked}
        ></PostActions>
        <br />
      </div>
    );
  }
}

console.log("This is from Feed");

ReactDOM.render(
  <div>
    <Post
      Username="shakti_n10"
      Image_URL={
        "https://images.pexels.com/photos/3876332/pexels-photo-3876332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    />
    <Post
      Username="shakti_n10"
      Image_URL={
        "https://images.pexels.com/photos/12800833/pexels-photo-12800833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    />
    <Post
      Username="shakti_n10"
      Image_URL={
        "https://images.pexels.com/photos/12640007/pexels-photo-12640007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      }
    />
  </div>,
  document.querySelector(".Post")
);

console.log("This is another log2 from feed");
