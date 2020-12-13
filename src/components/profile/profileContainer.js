import React from 'react'
import Profile from './profile'
import { connect } from 'react-redux'
import {getUserProfile} from '../redux/profileReducer'
import { withRouter } from 'react-router-dom'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let UserId = this.props.match.params.userId
        if (!UserId) {
            UserId = 2
        }
        this.props.getUserProfile(UserId)
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

export default connect(mapStateToProps, {getUserProfile})(withProfile)