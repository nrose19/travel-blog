import React from 'react';



export default function NavPic(){
    return(
        <>
            <img 
                className='w-16 h-16 rounded-full border border-gray-100 shadow-sm object-cover m-3'
                src={require('../../assets/images/gardenArch.jpg')}
                alt="garden arch versaille"
            />
        </>
    )
}