import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import PostList from './PostList';
import PostForm from './PostForm';
import axios from 'axios';
import '../main.css';

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

  deletePost = (id) => {
    axios.delete(`/api/posts/${id}`)
      .then( () => {
        const{ posts } = this.state;
        this.setState({ posts: posts.filter( t=> t.id !== id) })
      });
  }


  render() {
    return (
      <div className="buffer">
        <Container textAlign='center'>
          <div className="postForm">
            <PostForm 
            addPost={this.addPost}
            />
          </div>
          <br />
          <PostList 
          posts={this.state.posts}
          deletePost={this.deletePost}
          />
        </Container>
      </div>
    );
  }
}

export default Home;
