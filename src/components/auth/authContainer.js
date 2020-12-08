import React from 'react'
import * as axios from 'axios'
import { connect } from 'react-redux'
import Auth from './auth'
import { setAuthData } from './authReducer'

class AuthContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthData(response.data)
            }
        })
    }

    render() {
        return <Auth login={this.props.login}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, {setAuthData})(AuthContainer)