import Image from 'next/image';
import React from 'react';

const ExcangeCard = ({img, title, descr}) => {
    return (
        <div className='card mt-4 border-2 py-4 w-full dark:text-white px-10'>
            <Image className='py-6' src={img} width={100} height={100} alt='image' />
            <h1 className='text-3xl mb-4'>{title}</h1>
            <p className='pb-20 text-lg mb-2'>{descr}</p>
        </div>
    );
};

export default ExcangeCard;