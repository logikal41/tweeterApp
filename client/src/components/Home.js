import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import PostList from './PostList';
import PostForm from './PostForm';
import axios from 'axios';

class Home extends Component {
  state= { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
      .then( res => {
        this.setState({ posts: res.data })
      });
  }

  addPost = (message) => { 
    let post = { message };
    axios.post(`/api/posts`, { post })
      .then( post => {
        const{ posts } = this.state;
        this.setState({ posts: [...posts, post] });
      }) 
  }


  render() {
    return (
      <div>
        <PostForm 
        addPost={this.addPost}
        />
        <br />
        <PostList 
        posts={this.state.posts}
        />
      </div>
    );
  }
}

export default Home;
