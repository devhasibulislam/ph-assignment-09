import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(true);
    return (
        <div className='flex justify-between items-center p-4 bg-[#fd627a] text-white mb-4'>
            <div className="header-logo flex items-baseline">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-reader" className="w-8 mr-2 svg-inline--fa fa-book-reader fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z"></path></svg>
                <span className='m-0'>Tear-Fresh Liquigel Car Review</span>
            </div>
            <div className='w-8 md:hidden' onClick={() => setOpen(!open)}>
                {open ? <MenuIcon></MenuIcon> : <XIcon></XIcon>}
            </div>
            <div className={`md:flex ${open ? 'hidden' : 'block'}`}>
                <CustomLink to={'/home'}>Home</CustomLink>
                <CustomLink to={'/analytics'}>Analytics</CustomLink>
                <CustomLink to={'/reviews'}>Reviews</CustomLink>
                <CustomLink to={'/QNA'}>QNA</CustomLink>
                <CustomLink to={'/about'}>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;