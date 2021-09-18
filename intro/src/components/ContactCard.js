import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';


const ContactCard = (props) => {
    const {id, name, email, image}=props.contact;
    return (
        <div className="item">
            <img src={image} alt="user icon"/>
        <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
                <FaTrashAlt
                style={{color:"red", marginTop:"7px"}}/>
        </div>
    </div>
    )
}

export default ContactCard
