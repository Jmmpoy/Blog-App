import React, { Component } from "react";
import Comment from "./Comment/comment";
class commentList extends Component {
  render() {
    const comments = this.props.data.map(comment => (
      <div  key={comment.id} style={{fontSize:'0.8em'}}>
        <Comment id={comment.id} author={comment.author}>
          {comment.body}
        </Comment>
      </div>
    ));

    return <div className="text-left">{comments}</div>;
  }
}

export default commentList;
