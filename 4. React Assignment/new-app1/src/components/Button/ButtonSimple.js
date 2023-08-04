import React from 'react'

export const ButtonSimple = (props) => { /* Also Write the destructuring in arrow Function pranthensis */
    
    // Destructureing the props
    const {text, icon} = props

    // console.log(props)
    // console.log(props.bgColor)

    return (
        <button className={`btn btn-${props.bgColor}`}><i className={`fas fa-${icon} me-2`}></i>{text ? text : "Write text"}</button>
    )
}

// export default ButtonSimple 
