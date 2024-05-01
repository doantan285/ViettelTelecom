import React from 'react';
import LinkNav from '~/base-components/LinkNav';

export default function FooterNav({ href, title, contents }) {
    return (
        <div className='mt-6'>
            <strong className='text-sm'>{title}</strong>
            {contents.map((content, index) => (
                <LinkNav key={index} className="text-xs" href={href} children={content} />
            ))}
        </div>
    );
}
