import React from 'react';
import Link from 'next/link';

export default function Bar() {
    return (
        <nav className='bar'>
            <div className='container 
            lg:mx-1 md:mx-6 mx-4
            flex justify-between items-center'>
                <div className='text-white text-md pt-5'>
                    <Link href="/">← Back</Link>
                </div>
            </div>
        </nav>
    );
}
