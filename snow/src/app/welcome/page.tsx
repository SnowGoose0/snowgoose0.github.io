import React from 'react';
import Image from 'next/image';
import myself from '../../../public/images/self.jpg';
import Bar from '../components/Bar';

export default function About() {
    const imgBasePath = '/images/';
    const gallery = [
        'jason-copycat-f-min.jpg',
        'jason-yi-asset6.jpg',
        'jason-yi-assets.jpg',
        'jason-yi-japanhouse.jpg',
        'jason-asset.jpg',
        'jason-asset(1).jpg',
        'jason-asset(2).jpg',
        'jason-asset(3).jpg',
        'jason-asset(4).jpg',
        'jason-asset(5).jpg',
        'jason-yi-asset5.jpg',
        'jason-apocalyptical-min.jpg',
        'jason-nyc.jpg',
        'jason-yi-asset.jpg',
        'jason-yi-asset1.jpg',
        'jason-yi-asset2.jpg',
        'jason-yi-asset3.jpg',
    ];

    return (
        <main
            className='flex-col justify-center items-center 
                    lg:mx-64 md:mx-32 sm:mx-24 mx-4
                    lg:text-lg md:text-base text-sm'
        >
            <article className='font-thin min-h-screen'>
                <Bar />
                <section className='flex'>
                    <figure>
                        <Image
                            className='mt-52'
                            src={myself}
                            alt='An image of me!'
                            width={1600}
                        ></Image>
                    </figure>
                    <section className='flex-col justify-center ml-12'>
                        <p className='mt-52'>
                            {`Hi! I'm Jason, a computer science student at Simon Fraser 
                University. I am a previous software engineering intern 
                at Arista Networks.`}
                        </p>
                        <br />
                        <p>{`I love solving problems and learning. As an inspiring software 
                engineer, I have developed my skills in a variety of areas and 
                technolgies. Most recently, I have been learning more about web 
                development using technolgies like Next.js, Express.js, Firebase, 
                and SQL with Supabase.`}</p>
                        <br />
                        <p>
                            {`When I'm not coding or studying, you can find me 
                playing/watching basketball, making 3D art, hiking, or 
                just lying in my bed.`}
                        </p>
                        <br /> <br />
                        <p className=''>Learn more about my:</p>
                        <ul className='cursor-pointer underline'>
                            <li className='ml-8'>
                                <a href='/experience'>Experience</a>
                            </li>
                            <li className='ml-8'>
                                <a href='/projects'>Projects</a>
                            </li>
                            <li className='ml-8'>
                                <a href='/education'>Education</a>
                            </li>
                            <li className='ml-8'>
                                <a href='#art'>Art</a>
                            </li>
                        </ul>
                    </section>
                </section>
            </article>
            <article
                id='art'
                className='flex justify-center flex-wrap min-h-screen my-32'
            >
                {gallery.map((img, index) => {
                    return (
                        <figure key={index} className='mt-28 w-1/2'>
                            <Image
                                className='p-4
                                    transition-all hover:scale-105 duration-500'
                                key={index}
                                src={imgBasePath + img}
                                alt={`Gallery ${index}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                width={500}
                                height={500}
                            ></Image>
                        </figure>
                    );
                })}
            </article>
        </main>
    );
}
