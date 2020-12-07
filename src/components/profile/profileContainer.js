import React from 'react'
import Profile from './profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import {setProfileData} from '../redux/profileReducer'

class ProfileContainer extends React.Component {
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {setProfileData})(ProfileContainer)