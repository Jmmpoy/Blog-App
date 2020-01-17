import React, { Component } from "react";
import { Link } from "react-router-dom";
import './style.css'

class PostList extends Component {
  render() {
console.log(this.props.posts);
const posts = this.props.posts ;



const post = posts.map(post  => (
  <div className="text-center" key={post.id}>
    <Link to ={'/post/' + post.id}>
      <button
        className=" post col-md-6 mx-auto bg-light shadow-lg p-3 mb-4"
        style={{ border: "none" }}
        
        >
      <h3>{post.title}</h3>
        <p style={{fontSize:'0.8em'}}>{post.body}</p>
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
