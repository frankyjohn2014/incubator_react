import React from 'react'
import Profile from './profile'
import { connect } from 'react-redux'
import {getUserProfile,getStatus, updateStatus, savePhoto} from '../profile/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import { compose } from 'redux'
import { logout } from '../auth/authReducer'

class ProfileContainer extends React.Component {
    refreshPageUpdate () {
        let UserId = this.props.match.params.userId
        if (!UserId) {
            UserId = this.props.authoriziedId.id
            //redirect to login
            // if(!UserId) {
            //     this.props.history.push("/login")
            // }
        }
        this.props.getUserProfile(UserId)
        this.props.getStatus(UserId)
    }

    componentDidMount() {
        this.refreshPageUpdate()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props != prevProps) {
            this.refreshPageUpdate()
               
        }
    }

    render() {
        console.log('container',{...this.props})
        return (
            <div>
                <Profile {...this.props} 
                profile={this.props.profile} 
                status = {this.props.status} 
                updateStatus={this.props.updateStatus} 
                login={this.props.login}
                logoutReducer={this.props.logout}
                isOwner={!this.props.match.params.userId}
                savePhoto={this.props.savePhoto}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {

    return {
        profile: state.profile,
        login: state.login,
        status: state.profile.status,
        authoriziedId: state.login
    }
}


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, logout, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)