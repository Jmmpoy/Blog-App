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
    this.setState({ author: '', bodyt: '' });
  }

  render() {
      const {author,body} = this.state
      console.log(author,body)
    return (
      <div className="mx-auto col-6 p-4">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Your name..."
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
          <br/>
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

export default commentForm;
