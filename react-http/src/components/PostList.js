import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  //Executed when the component mounts and only executed once in the lifecycle
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts5")
      .then((response) => {
        console.log("Passou mount");
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreing data" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    console.log("Passou render");
    return (
      <div>
        List of Posts
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
        {errorMsg ? <div>{errorMsg}</div> : null}
      </div>
    );
  }
}

export default PostList;
