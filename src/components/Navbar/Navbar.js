import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='text-center'> 
            <Link to='/'>Home</Link>
            <Link className='ml-5'  to='/addtour'>Add Tour</Link>
            <Link className='ml-5' to='/tours'>Tours</Link>
            <Link className='ml-5' to='/myreview'>My review</Link>
        </div>
    );
};

export default Navbar;