import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <div className='text-xl flex space-x-10'>
                <Link to='/' >Home</Link>
            <Link to='/login' >Login</Link>
            <Link to='/register' >Register</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
