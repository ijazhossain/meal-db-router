import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive
                    ? "bg-gray-800 text-white mr-3 font-bold p-3 rounded-lg"
                    : "mr-3 text-lg font-bold text-gray-800"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;