'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import Navlink from './nav-link';
import { NAVIGATION_LINKS } from '../lib/navigation';

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <nav className='flex '>
      <ul className='flex'>
        {NAVIGATION_LINKS.map((link) => (
          <li
            key={link.id}
            className='inline-block relative'
            onMouseEnter={() => link.sublinks && setOpenDropdown(link.id)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {link.sublinks ? (
              <>
                <button
                  className='text-skoda-electric-green px-4 py-2 hover:bg-skoda-electric-green/10 transition-all w-full flex items-center cursor-pointer'
                  aria-haspopup='menu'
                  aria-expanded={openDropdown === link.id}
                >
                  {link.text}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === link.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <ul
                  role='menu'
                  className={`absolute left-0 top-full z-50 bg-skoda-emerald-green w-40 transition-all duration-200 ease-out ${
                    openDropdown === link.id
                      ? 'opacity-100 translate-y-0 visible'
                      : 'opacity-0 -translate-y-2 invisible'
                  }`}
                >
                  {link.sublinks?.map((sublink) => (
                    <li key={sublink.id} role='menuitem'>
                      <Navlink href={sublink.href}>{sublink.text}</Navlink>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Navlink href={link.href!}>{link.text}</Navlink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
