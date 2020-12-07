import React from 'react'
import Profile from './profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setProfileData} from '../redux/profileReducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
     debugger
        let UserId = this.props.match.params.userId
        if (!UserId) {
            UserId = 2
        }
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ UserId )
        .then(response => {
            this.props.setProfileData(response.data)
        })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

let withProfile = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileData})(withProfile)