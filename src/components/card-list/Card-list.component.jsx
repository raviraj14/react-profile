import React from 'react';
import { Card } from '../card/Card.component';
import  './Card-list.style.css';


export const CardList = props => (
    
        <div className='card-list'>
            {props.employee.map(employee =>(
            <Card key={employee.id} employee={employee} />
            ))}
        </div>
    
)