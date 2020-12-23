import React from 'react'


const ProfileInfoComponent = (props) => {
    return (
        <div>
            <button onClick={() => {}}>Save</button>
            <div>
                About Me : {props.aboutMe}
            </div>
            <div>
               {props.fullName}
            </div>
            <div>
                <p>
                lookingForAJob : {props.lookingForAJobDescription ? "yes" : "no"}
                </p>
            </div>
            <div>
                <b>My proffessional skill</b>: {props.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts:</b> {props.contacts}
            </div>
            <hr/>
            {/* <div>
                {!props.login.isAuth ? <div>No log in</div> : 
                <div>
                    <div>{props.login.email}</div>
                    <br/>
                    <button onClick={props.logoutReducer}> Logout </button>
                </div>}
            </div> */}


        </div>
    )
}
export default ProfileInfoComponent
