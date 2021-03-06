import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setUserProfile, setUserStatus} from '../../redux/profileReducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data);
        });
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/status/` + userId).then(response => {
            this.props.setUserStatus(response.data);
        }); 
    }
    render() {
        return (
            <Profile {...this.props} profile= {this.props.profile} status= {this.props.status} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,   
        status: state.profilePage.status
    }
}

const UrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, setUserStatus}) (UrlDataContainer);
