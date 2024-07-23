import React from 'react'

function MenuItem({title,price,img,desc,className}) {

    return (
        
        <div className={`menu-item flex flex-wrap w-full h-96  text-white rounded-md ${className} border-b-2 border-emerald-500 hover:scale-[1.05] transition-all`}>
            <div className="img w-full h-44 ">
                <img className='w-full h-44 rounded-md' src={img} alt="food-img" />
            </div>
            <div className="title-price p-4  flex w-full justify-between items-start">
                <h1 className='text-lg '>{title}</h1>
                <span className='bg-emerald-500 rounded-md w-16 text-center'>{price}</span>
            </div>
            <div className="description p-4">
            <p className='text-sm text-emerald-400 text-opacity-70'>
                {desc}
            </p>
            </div>
        </div>
    )
}

export default MenuItem
