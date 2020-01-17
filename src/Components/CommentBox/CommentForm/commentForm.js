import React, { Component } from "react";

class commentForm extends Component {
  constructor() {
    super();
    this.state = {
      id:'',
      author: "",
      body: ""
    };
  }

  handleAuthorChange = e => {
    this.setState({ author: e.target.value });
  };
  handleBodyChange = e => {
    this.setState({ body: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let author = this.state.author.trim();
    let body = this.state.body.trim();
    if (!body || !author) {
      return;
    }
    this.props.onCommentSubmit({ author: author, body: body });
    this.setState({ author: '', body: '' });
  }

  render() {
      const {author,body} = this.state
      console.log(author,body)
    return (
      <div className="mx-auto col-6 p-4" style={{borderRadius:'20px'}}>
        <form onSubmit={this.handleSubmit}>
          <input
          style={{fontSize:'0.8em'}}
            type="text"
            placeholder="Your name..."
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            style={{fontSize:'0.8em'}}
            type="text"
            placeholder="Say something..."
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <br/>
          <input style={{fontSize:'0.7em'}}type="submit" value="Post Comment" />
        </form>
      </div>
    );
  }
}

export default commentForm;
