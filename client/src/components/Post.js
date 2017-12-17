import React from 'react';

const Post = ( {id, message, deletePost} ) => (
    <div className="tweet">
        <div className="message">
            <h1 className="description"> {message} </h1>
        </div>
        <button type="button" className="ui primary button">
            update  
        </button>
        <button type="button" className="ui button" onClick={() => deletePost(id)}>
            delete 
        </button>
    </div>
)

export default Post;