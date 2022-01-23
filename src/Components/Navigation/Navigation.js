import React from 'react';
import { NavLink } from 'react-router-dom';
import { DICTIONARY } from '../../Shared/Data/data';

export const Navigation = () => {
    return <div className='navigation'>
        <h1 className='logo'>{DICTIONARY.TITLE}</h1>
        <nav>
            <NavLink className={({ isActive }) => isActive ? "active" : ''} to='/'>{DICTIONARY.HOME}</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ''} to='booklist'>{DICTIONARY.VIEW_BOOKS}</NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : ''} to='addbook'>{DICTIONARY.ADD_BOOK}</NavLink>
        </nav>
    </div>;
};
