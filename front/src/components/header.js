import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1 className='text-red-600'>SENAI</h1>

            <nav>
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/sensors"}>Sensors</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;