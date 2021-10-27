import React from 'react';
import './Switch.css';

const Toggle = () => {
    return (
        <label className='switch'>
            <input type="checkbox" />
            <span className='slider' />
        </label>
    )
}

export default Toggle
