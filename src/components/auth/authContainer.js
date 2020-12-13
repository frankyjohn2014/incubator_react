import React from 'react'
import { connect } from 'react-redux'
import Auth from './auth'
import { getAuthData } from './authReducer'

class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
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

export default connect(mapStateToProps, {getAuthData})(AuthContainer)