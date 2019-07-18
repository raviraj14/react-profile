import React from 'react';
import './Card.style.css';

export const Card = props => (

    <div className="card-container">

        <img src={`https://robohash.org/${props.employee.id}?set=set2&size=180x180`} alt="profile-pic" />
        <h3>{props.employee.name}</h3>
        <p>{props.employee.email}</p>
        
    </div>

)