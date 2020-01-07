import React, { Component } from 'react';
import axios from 'axios';
class post extends Component {
  constructor(props) {
    super(props)
    this.state = {
        post: {}
    }
}
  componentDidMount(){
    const { id } = this.props.match.params;
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    axios.get(URL).then(res => {
      const post = res.data;
      this.setState({
        post
      });
    });
  }

  render() {
    let {title, body} = this.state.post
    return (
      <div className="container-fluid App">
        <div className="row d-flex flex-column pt-5 ">
          <div className="col-md-6 mx-auto bg-light shadow-lg p-5">
                <h2>{title}</h2>
                <p>{body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default post;











