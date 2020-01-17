import React, { Component } from "react";
import axios from "axios";
import CommentBox from '../CommentBox/commentBox';
import Header from '../../Components/Header/header'
class post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      
    }
  }
  componentDidMount() {
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
    let { title, body } = this.state.post;
    return (
      <div className="container-fluid App">
        <Header/>
        <div className="row d-flex flex-column pt-3 ">
          <div className="col-md-6 mx-auto bg-light shadow-lg p-5 mb-4" style={{borderRadius:'20px'}}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
          <CommentBox/>
        </div>
      </div>
    );
  }
}

export default post;
