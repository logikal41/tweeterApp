import React from 'react';

const AddPost = ({handleSubmit, handleChange, message}) => (

    <form className="row" onSubmit={handleSubmit}>
        <input 
            className = "col s8 offset-s2"
            placeholder="message"
            value={message}
            required
            onChange={handleChange}
        />
        <input 
        className="col s2 offset-s5 waves-light btn" 
        type="submit" 
        value="create post"
        />
    </form> 
)

export default AddPost;