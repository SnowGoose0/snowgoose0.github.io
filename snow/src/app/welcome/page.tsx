import React from 'react';
import Image from 'next/image';
import kitchen1 from '../images/jason-asset.jpg';

export default function About() {
    const imgBasePath = '/images/';
    const gallery = [
        'jason-asset.jpg',
        'jason-asset(1).jpg',
        'jason-asset(2).jpg',
        'jason-asset(3).jpg',
        'jason-asset(4).jpg',
        'jason-asset(5).jpg',
    ];

    return (
        <main className='flex flex-col justify-center items-center mx-64'>
            <article className='flex-col justify-center font-mono min-h-screen'>
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
                and SQL with Supabase. I've also been honing my C and C++ skills 
                through my personal projects and work experience. `}</p>
                <br />
                <p>
                    {`When I'm not coding or studying, you can find me 
                playing/watching basketball, making 3D art, hiking, or 
                just lying in my bed.`}
                </p>
            </article>
            <article className='min-h-screen mt-32'>
                {gallery.map((img, index) => {
                    return (
                        <Image
                            key={index}
                            src={imgBasePath + img}
                            alt={`Gallery ${index}`}
                            width={800}
                            height={300}
                        ></Image>
                    );
                })}
            </article>
        </main>
    );
}
