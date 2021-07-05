import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div style={{fontFamily: 'Poppins'}} className="text-white header">
            <h6 className="mt-5">Hello It's</h6>
            <h1>Ekota Sports</h1>
            <a href="#" className="btn btn-danger mt-4 header-btn">Express Your Interest</a>
        </div>
    );
};

export default Header;