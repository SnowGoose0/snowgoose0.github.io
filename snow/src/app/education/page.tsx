import React from 'react';
import Bar from '../components/Bar';
import Tag from '../components/Tag';

export default function Education() {
    const courseWork = [
        'CMPT120 Programming I',
        'CMPT125 Programming II',
        'CMPT225 DSA',
        'CMPT276 SWE',
        'CMPT354 DB',
        'CMPT295 Computer Systems',
        'CMPT300 OS',
        'CMPT365 Multimedia',
        'CMPT353 Data Science',
        'CMPT272 Front-End Development',
    ];

    return (
        <main className='flex-col min-h-screen font-thin
                    lg:mx-64 md:mx-32 sm:mx-24 mx-4
                    lg:text-lg md:text-base text-sm
        '>
            <Bar />
            <article
                className='bg-zinc-950
                    border-gray-500 border-2
                    mt-32 p-12 rounded-3xl 
                    lg:mx-32 md:mx-16 mx-2'
            >
                <section className='w-full mb-4 flex justify-between'>
                    <h1 className='font-bold text-xl w-1/2'>Simon Fraser University</h1>
                    <p className='text-xl w-1/2 text-right'>Expected Graduation: 2025</p>
                </section>
                <p>Bachelor of Science, Computer Science</p>
                <p>GPA: 4.28/4.33</p>
                <section className='mt-4'>
                    <p>
                        {
                            "Awards: Dean's Honour Roll & President's Honour Roll (Fa 2022, Sp 2023, Fa 2023)"
                        }
                    </p>
                </section>
                <section className='flex flex-wrap w-full mt-2'>
                    <div className='flex justify-center items-center'>
                        <p className='mr-2'>Coursework: </p>
                    </div>
                    {courseWork.map((course, key) => {
                        return <Tag key={key} value={course} />;
                    })}
                </section>
            </article>
        </main>
    );
}
