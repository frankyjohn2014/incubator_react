import React from 'react'
import Profile from './profile'
import { connect } from 'react-redux'
import {getUserProfile} from '../redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/AuthRedirect'
import { compose } from 'redux'

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
        profile: state.profile,
        login: state.login,
    }
}


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainer = withRouter(AuthRedirectComponent)



export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)