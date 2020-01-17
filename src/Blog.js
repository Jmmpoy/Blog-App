import React, { Component } from 'react'
import PostList from './Components/PostList/postList'
import axios from "axios";
import Header from './Components/Header/header'

export default class App extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const posts = res.data;
      this.setState({
        posts
      });
    });

  };


  render() {
    const posts = this.state.posts
    return (
      <div>
          <Header/>
          <PostList posts={posts}/>
      </div>
      
    )
  }
}
