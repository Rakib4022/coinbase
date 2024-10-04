import Image from 'next/image';
import React from 'react';
import logo from '../../../../../assets/logo.png'

const CoinbaseSection = ({ img, title, heading, subHeading, btntext }) => {
    return (
        <div className='lg:flex my-12 p-4 gap-4'>
            <div className='lg:w-1/2 '>
                <Image src={img} alt='Image' className='w-[370px] h-[680px] mx-auto'></Image>
            </div>
            <div className='lg:w-1/2 space-y-6 flex flex-col justify-center'>
                <div className='flex items-center gap-4'>
                    <Image src={logo} alt='logo' className='w-12'></Image>
                    <h1 className='uppercase font-bold text-3xl'>{title}</h1>
                </div>
                <h1 className='lg:text-6xl text-3xl font-normal'>{heading}</h1>
                <p>{subHeading}</p>
                <a className='btn btn-primary w-full lg:w-auto  rounded-full mt-4'>{btntext}</a>
            </div>
        </div>
    );
};

export default CoinbaseSection;