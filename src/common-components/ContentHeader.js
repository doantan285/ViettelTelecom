import React from 'react';
import LinkNav from '~/base-components/LinkNav';

export default function ContentHeader({ title, navLinks, viewAllLink }) {
    return (
        <div className="flex justify-between">
            <div className="flex gap-11">
                <h1 className="text-2xl font-semibold text-slate-600 uppercase">{title}</h1>
                <div className="h-[25px] flex border-b border-slate-700 gap-6">
                    {navLinks &&
                        navLinks.length > 0 &&
                        navLinks.map((navLink) => (
                            <div
                                key={navLink.label}
                                className={
                                    'h-[25px] font-medium text-slate-600 border border-transparent hover:border-b-2 hover:border-b-[#ee0033]'
                                }
                            >
                                <LinkNav href={navLink.href} children={navLink.label} />
                            </div>
                        ))}
                </div>
            </div>
            {viewAllLink && viewAllLink.children && (
                <div>
                    <LinkNav
                        href={viewAllLink.href}
                        className={
                            'h-[21px] font-semibold border-b-2 border-red-500 text-[#ee0033]'
                        }
                        children={viewAllLink.children}
                    />
                </div>
            )}
        </div>
    );
}
