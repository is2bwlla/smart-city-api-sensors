import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='flex justify-between items-center p-3'>
            <h1 className='text-red-600 text-4xl font-bold font-poppins ml-3'>SENAI</h1>

            <nav>
                <ul className='flex w-[400px] justify-around'>
                    <li className='font-poppins text-lg text-[#1D1E18]'><Link to={"/home"}>Home</Link></li>
                    <li className='font-poppins text-lg text-[#1D1E18]'><Link to={"/sensors"}>Sensors</Link></li>
                    <li className='font-poppins text-lg text-[#1D1E18]'><Link to={"/"}>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;