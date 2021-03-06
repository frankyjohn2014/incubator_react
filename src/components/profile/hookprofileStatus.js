import  React, {useState, useEffect} from 'react'

const ProfileStatus = (props) => {
    const [editMode, setMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    
    const activateStatus = () => {
        setMode(true)
        // this.forceUpdate()
    }
    const deactivateStatus = () => {
        setMode(false)
        props.updateStatus(status)
        // this.forceUpdate()
    }       
    const changeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && 
            <div>
                <span onDoubleClick={activateStatus}>Status: {status || "------"}</span>
            </div>
        }
        {editMode && 
            <div>
                <input onChange={changeStatus} autoFocus={true} onBlur={deactivateStatus} value={status} />
            </div>
        }
        </div>
    )
}

export default ProfileStatus