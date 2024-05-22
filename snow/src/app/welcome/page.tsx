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
            className='flex flex-col justify-center items-center 
                    lg:mx-52 md:mx-24 sm:mx-12 mx-4
                    lg:text-base md:text-sm text-xs'
        >
            <article className='justify-center font-thin min-h-screen'>
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
                and SQL with Supabase. I've also been honing my C and C++ skills 
                through my personal projects and work experience. `}</p>
                        <br />
                        <p>
                            {`When I'm not coding or studying, you can find me 
                playing/watching basketball, making 3D art, hiking, or 
                just lying in my bed.`}
                        </p>
                    </section>
                </section>
            </article>
            <article className='min-h-screen mt-32 mb-32'>
                {gallery.map((img, index) => {
                    return (
                        <Image
                            className='mt-28 transition-all hover:scale-105 duration-500'
                            key={index}
                            src={imgBasePath + img}
                            alt={`Gallery ${index}`}
                            width={500}
                            height={600}
                        ></Image>
                    );
                })}
            </article>
        </main>
    );
}
