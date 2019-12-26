import React, { Component } from "react";
import Header from "../Header/header";
import axios from "axios";
import { Link } from "react-router-dom";

class PostList extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({
        posts
      });
    });
  };

  

  render() {
    console.log(this.state.posts);
    const posts = this.state.posts;
    const post = posts.map(post => (
      <div className="text-center" key={post.id} onClick={this.handleClick}>
        <Link to ="/post">
        <button
          className="col-md-6 mx-auto bg-light shadow-lg p-5"
          style={{ border: "none" }}
          onClick={this.handleClick}
        >
          <h2>{post.title}</h2>
          {post.body}
        </button>
        </Link>
      </div>
    ));

    
    return (
      <div className="container-fluid App">
        <Header />

        <div className="row d-flex flex-column pt-5 ">{post}</div>
      </div>
    );
  }
}

export default PostList;
