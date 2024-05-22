import Image from 'next/image';
import React from 'react';

interface Tab {
    label: string;
    path: string;
}

export default function Home() {
    const offset = 10;

    const tabNames: Tab[] = [
        { label: 'About', path: '/welcome' },
        { label: 'Experience', path: '/experience' },
        { label: 'Education', path: '/education' },
        { label: 'Projects', path: '/projects' },
        { label: 'Full Resume↓', path: '/full%20resume' },
    ];

    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24'>
            <ul
                className='menu-list text-2xl'
                style={{
                    transform: `translateX(-${(offset * tabNames.length) / 2}px)`,
                }}
            >
                {tabNames.map((menuItems: Tab, index: number) => (
                    <li
                        key={index}
                        className={index % 2 ? `skew-odd ` : `skew-even `}
                        style={{
                            position: 'relative',
                            left: `${index * offset}px`,
                        }}
                    >
                        <a
                            href={menuItems.path}
                            className='cursor-pointer 
                                        hover:text-blue-500 
                                        select-none
                                        uppercase
                                        font-bold
                                        transition-all
                                        duration-300'
                        >
                            {menuItems.label}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
