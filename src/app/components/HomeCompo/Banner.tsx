import Image from 'next/image';
import React from 'react';
import banner from '../../../../assets/banner..jpg';
import { Input } from '@/components/ui/input';


const Banner = () => {
    return (
        <div className='lg:flex my-12 p-2 container  mx-auto lg:gap-5'>
            <div className='lg:w-1/2 hidden lg:block'>
                <Image src={banner} alt="Picture of the author" />
            </div>
            <div className=' flex flex-col justify-center  p-2 lg:p-4 lg:space-y-6 space-y-3'>
                <h1 className='lg:text-7xl text-5xl font-normal'>The future of <br /> money is here</h1>
                <p className='lg:text-3xl text-xl '>We are the most trusted place for <br /> people and businesses to buy, sell, <br /> and manage crypto.</p>
                <div className="  max-w-sm   ">
                    <span className="label-text dark:text-white mb-2 font-bold">Email address</span>
                    <div className="lg:flex lg:items-center space-y-2 gap-1.5">
                        <Input type="email" className="h-11 mt-2" id="email" placeholder="Your Email" />
                        <button className="btn btn-primary rounded-3xl w-full lg:w-auto inline-block px-6">Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;