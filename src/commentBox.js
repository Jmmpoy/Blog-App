import React, { Component } from "react";
import CommentList from './commentList';
import CommentForm from './commentForm';


class commentBox extends Component {
  state = {
    comments: [
      {
        id: 1,
        author: "Joy",
        body: "Cette article est vraiment intéressant"
      },
      {
        id: 2,
        author: "Joy",
        body: " Je n'ai pas tout compris"
      }
    ]
  };

  handleCommentSubmit =(comment)=>{
    
    const comments = [...this.state.comments];
    comment.id = Date.now();
    let newcomments = comments.concat([comment])
    this.setState({
      comments: newcomments
    });
  }

  
  render() {
    
    return (
      <div className="bg-light col-6 mx-auto text-center">
        <p><b>Comments Section</b></p>
        <CommentList data={this.state.comments}/>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
}

export default commentBox;
