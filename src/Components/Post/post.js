import React, { Component } from "react";
import axios from "axios";
import CommentBox from "../CommentBox/commentBox";
import Header from "../../Components/Header/header";
import "./post.scss";

class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.get(URL).then((res) => {
      const post = res.data;
      this.setState({
        post,
      });
    });
  }

  render() {
    let { title, body } = this.state.post;
    return (
    
        <div className="stack-post">
          <div className="post-wrapper">
            <div className="post-wrapper-content">
              <h2>{title}</h2>
              <p>{body}</p>
            </div>
          </div>
          <div className="comment-wrapper">
            <CommentBox />
          </div>
        </div>
      
    );
  }
}

export default post;
