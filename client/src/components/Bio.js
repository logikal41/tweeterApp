import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import axios from 'axios';
import UpdateProfile from './UpdateProfile';

class Bio extends Component {
    state = {description: '', profile_image: '', id: '', toggle: true}

    componentDidMount() {
        axios.get('/api/bios')
          .then( res => {
            this.setState({ description: res.data.description, profile_image: res.data.profile_image, id: res.data.id })
          });
      }

    updateBio = (description, profile_image) => { 
        let bio = { description, profile_image };
        axios.put(`/api/bios/${this.state.id}`, { bio }) 
        this.setState({ description: description, profile_image: profile_image })
        this.toggleProfile();
      }

      toggleProfile = () => {
          this.setState({ toggle: !this.state.toggle });
      }


      render() {
          if (this.state.toggle) {
            return (
                <div className="buffer">
            
                    <Container textAlign='center'>
                        <h1 className="descriptionTitle">User Profile</h1>
                        <img src={this.state.profile_image} className='bio-image' />
                        <h3 className="descriptionBody"> {this.state.description} </h3>
                    
                        <button class="ui inverted grey button" onClick={this.toggleProfile}>
                        Update Profile
                        </button>
                    </Container>
                </div>
            )}
            else {
                return(
                    <div>
                        <Container textAlign='center'>
                            <h1 className="description"> Profile Update Page </h1>
                            <UpdateProfile 
                            description={this.state.description}
                            profile_image={this.state.profile_image}
                            updateBio={this.updateBio}
                            />
                            <button className="ui inverted grey button cancel" onClick={this.toggleProfile}>
                            Cancel Update 
                            </button>
                        </Container>
                    </div>
                )
            }
        }

}

export default Bio;