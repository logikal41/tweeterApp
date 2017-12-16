import React from 'react';
import AddPost from './AddPost'
import axios from 'axios'

class PostForm extends React.Component {
    state = { message: ''}

    handleChange = e => {
        this.setState({ message: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state.message)
        this.setState({ message: ''})
    }

    render() {
        return(
            <div className="container">
                <AddPost 
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
}

export default PostForm;
