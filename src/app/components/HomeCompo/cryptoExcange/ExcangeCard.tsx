import Image from 'next/image';
import React from 'react';

const ExcangeCard = ({img, title, descr}) => {
    return (
        <div className='card bg-base-100 border-2 py-12 w-full dark:text-black px-10'>
            <Image src={img} width={50} height={100} alt='image' />
            <h1 className='text-xl mb-4 font-bold'>{title}</h1>
            <p className='pb-20 text-base mb-2'>{descr}</p>
        </div>
    );
};

export default ExcangeCard;