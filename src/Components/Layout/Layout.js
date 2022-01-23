import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';


export const Layout = () => {
    return <div className='layout'>
        <Navigation />
        <div className='main_layout'>
            <Outlet />
        </div>
    </div>;
};
