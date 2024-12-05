'use client';

import { useState } from 'react';
import '@/app/ui/Styles/CSS/MenuBarComponent.css';
import menuicon from '@/app/ui/Resources/Photos/menu-icon.svg';
import exiticon from '@/app/ui/Resources/Photos/exit.svg';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/', id: 'homelink' },
    { name: 'Our Story', href: '/story', id: 'storylink' },
    { name: 'Photos', href: '/photos', id: 'photoslink' },
    { name: 'FAQs', href: '/faq', id: 'faqlink' },
    { name: 'Travel', href: '/travel', id: 'travellink' },
    { name: 'Registry', href: '/registry', id: 'registrylink' },
    { name: 'RSVP', href: '/rsvp', id: 'rsvplink' },
    { name: 'Account', href: '/account', id: 'accountlink' },
  ];

export default function MenuBar() {
    const pathname = usePathname();
    const [main_class, setMainClass] = useState ("menuUnclicked");
    const [button, setButtonClass] = useState ("unclicked");
    const [click, setClicked] = useState (false);
    const [icon, setIcon] = useState (menuicon);
    const [loggedIn, setLoggedIn] = useState(false);
    const [localToken, setLocalToken] = useState();

    // Toggle button/menu
    function updateMenu () {
        if (!click) {
            setMainClass ("menuClicked");
            setButtonClass ("clicked");
            setIcon (exiticon);
        }
        else {
            setMainClass ("menuUnclicked");
            setButtonClass ("unclicked");
            setIcon (menuicon);
        }
        setClicked (!click);
    }

    return (
        <div className="MenuBar" id={main_class}>
            <div className="flex flex-row items-center w-full justify-center" id={main_class}>
                <button className={button} onClick={updateMenu} id="menuButton"><Image src={icon} alt="hamburgerMenu"/></button>
                <span id="lineSpan"></span>
                {links.map((link) => {
                    return (
                    <Link
                        id={link.id}
                        key={link.name}
                        href={link.href}
                        onClick={updateMenu}
                        className={clsx(
                        'px-8 text-white transition-all duration-[250ms] no-underline underline-offset-[15px] decoration-transparent hover:underline hover:decoration-gold-100 text-4xl',
                        {
                            '!transition-none !underline !decoration-gold-100': pathname === link.href,
                        },
                        )}
                    >
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                    );
                })}
            </div>
        </div>
    );
}