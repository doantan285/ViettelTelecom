import React from 'react';
import { Link } from 'react-router-dom';

export default function LinkNav({ href, icon, children, className }) {
    return (
        <Link to={href} className={`flex gap-1.5 hover:text-red-500 ${className}`}>
            {icon ? (
                <>
                    <img className='fill-current' src={icon} alt="" />
                    <p className='text-sm flex items-center'>{children}</p>
                </>
            ) : (
                children
            )}
        </Link>
    );
}
