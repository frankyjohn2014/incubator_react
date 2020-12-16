import React from 'react'
import Profile from './profile'
import { connect } from 'react-redux'
import {getUserProfile,getStatus, updateStatus} from '../profile/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import { compose } from 'redux'
import { logout } from '../auth/authReducer'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let UserId = this.props.match.params.userId
        
        if (!UserId) {
            UserId = 2
        }
        this.props.getUserProfile(UserId)
        this.props.getStatus(UserId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} 
                profile={this.props.profile} 
                status = {this.props.status} 
                updateStatus={this.props.updateStatus} 
                login={this.props.login}
                logoutReducer={this.props.logout}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profile,
        login: state.login,
        status: state.profile.status
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, logout}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)