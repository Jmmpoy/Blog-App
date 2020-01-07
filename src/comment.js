import React from 'react'

const Comment = (props) => {
    
    return (
        <div>
            <b>{props.author}</b>
            <br/>
            <i>{props.children}</i>
        </div>
    )
}

export default Comment
