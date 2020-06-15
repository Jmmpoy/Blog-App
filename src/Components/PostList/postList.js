import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class PostList extends Component {
  render() {
    console.log(this.props.posts);
    const posts = this.props.posts;

    const post = posts.map((post) => (
      <div className="post" key={post.id}>
        <Link to={"/post/" + post.id} className="post-content">
          <h3 className="post-content-title">{post.title}</h3>
          <p>{post.body}</p>
        </Link>
      </div>
    ));

    return (
      <div className="list-wrapper">
        <div className="list">{post}</div>
      </div>
    );
  }
}

export default PostList;
