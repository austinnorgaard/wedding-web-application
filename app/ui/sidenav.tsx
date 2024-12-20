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
    // { name: 'Account', href: '/account', id: 'accountlink' },
  ];

export default function MenuBar() {
    const pathname = usePathname();
    const [main_class, setMainClass] = useState ("menuUnclicked");
    const [button, setButtonClass] = useState ("unclicked");
    const [click, setClicked] = useState (false);
    const [icon, setIcon] = useState (menuicon);

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
            <div className="md:flex md:flex-row md:items-center md:w-full md:justify-center" id={main_class}>
                <button className={button} onClick={updateMenu} id="menuButton"><Image src={icon} alt="hamburgerMenu"/></button>
                <span id="lineSpan"></span>
                {links.map((link) => {
                    return (
                    <div className='MenuBarMainContainer' id={main_class} key={link.name}>
                        <Link
                        id={link.id}
                        href={link.href}
                        onClick={updateMenu}
                        className={clsx(
                        'md:px-8 md:min-w-max text-white transition-all duration-[250ms] no-underline underline-offset-[15px] md:hover:underline decoration-gold-100 md:text-3xl 2xl:text-4xl',
                        {
                            '!transition-none md:underline md:decoration-gold-100': pathname === link.href,
                        },
                        )}
                        >
                            <p>{link.name}</p>
                        </Link>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}