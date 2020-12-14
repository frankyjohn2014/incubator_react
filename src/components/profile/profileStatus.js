import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
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
        // this.forceUpdate()
    }

    render() {

        return (
            <div>
                {!this.state.editMode && 
                <div>
                    <span onDoubleClick={this.activateStatus}>Status</span>
                </div>
            }
            {this.state.editMode && 
                <div>
                    <input autoFocus={true} onBlur={this.deactivateStatus} value="test"/>
                </div>
            }
            </div>
        )
    }
    
}

export default ProfileStatus