import Image from 'next/image';
import React from 'react';
import img from '../../../../assets/tools.webp';


const TheFreedomSection = () => {
    return (
        <div>
            <div className='lg:flex  p-2 container  mx-auto'>
                <div className=' flex flex-col justify-center  lg:w-1/2 p-2 lg:p-8 lg:space-y-6 space-y-3'>
                    <h1 className='lg:text-5xl text-3xl font-normal'>The freedom of crypto for everyone, everywhere</h1>
                    <p className='lg:text-3xl text-xl '>We’re committed to creating more economic freedom through accessible, safe, and secure financial tools for everyone.</p>
                    <div className="  max-w-sm   ">
                        <button className="btn btn-primary rounded-3xl text-white w-full lg:w-auto inline-block px-10">Learn more</button>
                    </div>
                </div>
                <div className='lg:w-1/2'>
                    <Image src={img} className='lg:h-[900px] object-cover' alt='image'></Image>
                </div>
            </div>
            <div className='bg-slate-800 text-white'>
            <div className='container mx-auto space-y-4 p-4 lg:flex py-20'>
                <h1 className='font-bold text-3xl'>Start your portfolio today</h1>
                <div>
                    <p className='text-xl'>Sign up for a Coinbase account today and see what the world of decentralized finance can do for you.</p>
                    <button className='btn btn-xs w-full lg:w-auto  rounded-full mt-4 lg:btn-lg '> Sing up </button>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default TheFreedomSection;