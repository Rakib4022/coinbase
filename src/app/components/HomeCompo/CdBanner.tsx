import Image from 'next/image';
import React from 'react';
import img from '../../../../assets/cb-banner.jpg';

const CdBanner = () => {
    return (
        <div className='bg-slate-800  text-white'>
            <div className='container mx-auto space-y-4  p-4 lg:flex py-20'>
                <h1 className='font-bold text-3xl'>USDC is the dollar for the digital age</h1>
                <div>
                    <p className='text-xl'>USDC gives you 24/7 access to payments and financial services. Trade, spend, and send faster and more efficiently.</p>
                    <button className='btn btn-xs w-full lg:w-auto md:btn-md rounded-full mt-4 lg:btn-lg'>Learn more</button>
                </div> 
            </div>
            <Image className='w-full max-h-44 object-cover' src={img} alt='Cd_Banner'></Image>
        </div>
    );
};

export default CdBanner;