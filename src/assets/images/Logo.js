import React from 'react';
import { Link } from 'react-router-dom';


export default function Logo() {
    return (
        <Link to="/">
            <img
                src="https://vietteltelecom.vn/images/logo_home_new.png"
                alt="logo vietteltelecom"
            />
        </Link>
    );
}
