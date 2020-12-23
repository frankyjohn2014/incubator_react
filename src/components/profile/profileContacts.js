import React from 'react'

export const ProfileContacts = (props) => {
    return (
        <div>
            <b>{props.contactTitle}:</b> {props.contactValue}
        </div>
    )
}