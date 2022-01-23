import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return <div className='navigation'>
        <h1 className='logo'>BuCoo</h1>
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active" : ''} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ''} to='booklist'>View Books</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ''} to='addbook'>Add Book</NavLink>
        </nav>
    </div>;
};
