import React from 'react';

const Post = ( {message} ) => (
    <div className="col s12">
        <div className="col m1">
            <h1> {message} </h1>
        </div>
        <button type="button" className="col m1 waves-light btn">
            update  
        </button>
        <button type="button" className="col m1 waves-light btn">
            delete 
        </button>
    </div>
)

export default Post;