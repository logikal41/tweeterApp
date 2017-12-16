import React from 'react';

class UpdateProfile extends React.Component {
    state = {description: '', profile_image: ''}

    handleChangeDescription = e => {
        this.setState({ description: e.target.value });
    }

    handleChangeImage = e => {
        this.setState({ profile_image: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateBio(this.state.description, this.state.profile_image)
        this.setState({ description: '', profile_image: '' })
    }

    render () {
        return(
        <form className="row" onSubmit={this.handleSubmit}>

            <input 
                className = "col s8 offset-s2"
                placeholder= {this.props.description}
                required
                onChange={this.handleChangeDescription}
            />
            <input
                className = "col s8 offset-s2"
                placeholder={this.props.profile_image}
                required
                onChange={this.handleChangeImage}
            />
            <input 
            className="col s2 offset-s5 waves-light btn" 
            type="submit" 
            value="update profile"
            />
        </form> 
        )
    }

    
}


export default UpdateProfile;