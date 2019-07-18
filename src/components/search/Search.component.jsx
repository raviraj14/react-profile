import React from 'react';
import './search.style.css';

export const SearchBox = ({placeholder, handelchange}) => (
    <input type='search' 
    className="searchbox" 
    placeholder= {placeholder} 
    onChange={handelchange} />     
)