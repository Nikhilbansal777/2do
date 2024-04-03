import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Counter = () => {
    return (
        <React.Fragment>
            Counter Appp
            <nav>
                <NavLink to={'aboutCounter'}> About the Counter Application</NavLink>
                <NavLink to={'faqCounter'}> FAQ </NavLink>
            </nav>

            <Outlet></Outlet>
        </React.Fragment>
    );
};

export default Counter;