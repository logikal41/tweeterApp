import React from 'react';
import { Container } from 'semantic-ui-react';

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
            <div>
                <Container textAlign='center'>
                    <form className="row" onSubmit={this.handleSubmit}>
                        <h3 className="descriptionTitle">
                        Profile description:
                        </h3>
                        <input 
                            className = "col s8 offset-s2"
                            placeholder= {this.props.description}
                            required
                            onChange={this.handleChangeDescription}
                        />
                        <br />
                        <h3 className="descriptionTitle">
                        Profile Image:
                        </h3>
                        <input
                            className = "col s8 offset-s2 input"
                            placeholder={this.props.profile_image}
                            required
                            onChange={this.handleChangeImage}
                        />
                        <br />
                        <input 
                        className="ui inverted grey button input" 
                        type="submit" 
                        value="update profile"
                        />
                        <div className="space">
                        </div>
                    </form> 
                </Container>
            </div>
        )
    }

    
}


export default UpdateProfile;