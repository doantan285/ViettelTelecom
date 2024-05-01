import React from 'react';
import LinkNav from '~/base-components/LinkNav';

export default function NewsPackage({ href, img, title, date, className }) {
    return (
        <div>
            <img className="rounded-r-lg rounded-tl-xl" src={img} alt="" />
            <LinkNav
                href={href}
                className={`font-semibold text-slate-700 line-clamp-1 ${className}`}
                children={title}
            />
            <div className="pl-3 text-sm text-slate-600">{date}</div>
        </div>
    );
}
