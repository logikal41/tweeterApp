import React from 'react';
import Post from './Post';

class PostList extends React.Component {
    render() {
        return(
            <div className="row">
                <h1> THIS IS A LIST OF MESSAGES </h1>
                { this.props.posts.map( post => 
                    <Post
                        key={post.id}
                        {...post}
                    />
                )}
            </div>
    )}
}    
    

export default PostList;