import React, { Component } from "react";
import { Link } from "react-router-dom";


class PostList extends Component {
  render() {
console.log(this.props.posts);
const posts = this.props.posts ;



const post = posts.map(post  => (
  <div className="text-center" key={post.id}>
    <Link to ={'/post/' + post.id}>
      <button
        className="col-md-6 mx-auto bg-light shadow-lg p-5"
        style={{ border: "none" }}
        >
      <h2>{post.title}</h2>
      {post.body}
      </button>
      </Link>
  </div>  
));


    return (
      <div className="container-fluid App">
         <article className="row d-flex flex-column pt-5 ">{post}</article>
      </div>
    );
  }
}

export default PostList;
