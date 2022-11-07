import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/addtour'>Add Tour</Link>
            <Link to='/tours'>Tours</Link>
        </div>
    );
};

export default Navbar;