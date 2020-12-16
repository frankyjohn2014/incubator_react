import React from 'react'
import { connect } from 'react-redux'
import Auth from './auth'
import { getAuthData,loginReducer, logout } from './authReducer'

class AuthContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthData()
    }

    render() {
        return <Auth stateLogin={this.props.login} loginReducer={this.props.loginReducer} logout={this.props.logout}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps, {getAuthData,loginReducer, logout})(AuthContainer)