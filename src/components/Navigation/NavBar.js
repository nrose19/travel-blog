import React from 'react';
import { Link } from 'react-router-dom'

import NavPic from '../Images/navImages';

import '../../assets/css/fonts.css';

export default function Nav(){
    return(
        <>
            <nav className='bg-darkBlue'>
                <div>
                    <Link to='/'>
                        <NavPic />
                    </Link>
                </div>
            </nav>
        </>
    )
}