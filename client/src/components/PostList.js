import React from 'react';
import Post from './Post';

class PostList extends React.Component {
    render() {
        return(
            <div className="row">
                <h1 className="description input underline"> Politically Correct Tweets </h1>
                { this.props.posts.map( post => 
                    <Post
                        deletePost={this.props.deletePost}
                        key={post.id}
                        {...post}
                    />
                )}
            </div>
    )}
}    
    

export default PostList;