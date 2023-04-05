import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='flex items-center justify-center mb-5 bg-gray-300 p-6'>
            <ActiveLink className='mr-3 text-lg font-bold text-gray-800' to="/">Home</ActiveLink>
            <ActiveLink className='mr-3 text-lg font-bold text-gray-800' to="/restaurant">Restaurant</ActiveLink>
            <ActiveLink className='mr-3 text-lg font-bold text-gray-800' to="/about">About</ActiveLink>
        </nav>
    );
};

export default Header;