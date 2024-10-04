import { Input } from '@/components/ui/input';
import Image from 'next/image';
import React from 'react';
import img from '../../../../assets/portfolio.jpg';

const StartPortfolio = () => {
    return (
        <div className='lg:flex my-6 p-2 container  mx-auto'>
            <div className=' flex flex-col justify-center  lg:w-1/2 p-2 lg:p-8 lg:space-y-6 space-y-3'>
                <p className='lg:text-3xl text-xl '>Take control of your money</p>
                <h1 className='lg:text-5xl text-3xl font-normal'>Start your portfolio <br /> today and discover <br /> crypto</h1>
                <p className='block lg:hidden text-xl'>We’re committed to creating more economic freedom through accessible, safe, and secure financial tools for everyone.</p>
                <div className="  max-w-sm   ">
                    <span className="label-text dark:text-white mb-2 font-bold">Email address</span>
                    <div className="lg:flex items-center space-y-2 gap-1.5">
                        <Input type="email" className="h-11 mt-2" id="email" placeholder="Your Email" />
                        <button className="btn btn-primary rounded-3xl w-full lg:w-auto inline-block px-6">Sing Up</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 my-4'>
                <Image src={img} alt='image'></Image>
            </div>
        </div>
    );
};

export default StartPortfolio;