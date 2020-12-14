import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: !this.props.status,
    }

    activateStatus = () => {
        this.setState({
            editMode: true
        })
        // this.forceUpdate()
    }

    deactivateStatus = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
        // this.forceUpdate()
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode && 
                <div>
                    <span onDoubleClick={this.activateStatus}>Status: {this.props.status || "No status"}</span>
                </div>
            }
            {this.state.editMode && 
                <div>
                    <input onChange={this.changeStatus} autoFocus={true} onBlur={this.deactivateStatus} />
                </div>
            }
            </div>
        )
    }
    
}

export default ProfileStatus