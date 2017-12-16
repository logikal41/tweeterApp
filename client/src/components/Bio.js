import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
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
            <div className="container">
                <h2> SHOWING Bio </h2>
                {this.state.description}
                <img src={this.state.profile_image} />
                <br />
                <input 
                className="col s2 offset-s5 waves-light btn" 
                type="button" 
                value="Update Profile" 
                onClick= {this.toggleProfile}
                />
            </div>
            )}
            else {
                return(
                    <div className="container">
                    <h1> UPDATING PROFILE </h1>
                        <UpdateProfile 
                        description={this.state.description}
                        profile_image={this.state.profile_image}
                        updateBio={this.updateBio}
                        />
                        <input 
                        className="col s2 offset-s5 waves-light btn" 
                        type="button" 
                        value="Cancel Update" 
                        onClick= {this.toggleProfile}
                        />
                    </div>
                )
            }
        }

}

export default Bio;