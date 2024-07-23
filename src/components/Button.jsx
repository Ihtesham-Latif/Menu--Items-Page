import React, { useState } from 'react'
import menu from './Data'

function Button({name , click}) {
    return (
        <div className="buttoncontainer text-white  space-x-3">
            <button name={name} onClick={click}  className='w-20 bg-emerald-500 rounded-md hover:bg-yellow-500'>{name}</button>
        </div>
    )
}

export default Button
