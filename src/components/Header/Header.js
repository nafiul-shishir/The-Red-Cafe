import React from 'react';
import logo from '../../image/the-red-cafe.png'
import './Header.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
        </div>
    );
};

export default Header;