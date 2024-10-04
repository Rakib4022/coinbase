import React from 'react';

const GetStartedSection = () => {
    return (
        <div className='bg-blue-700 text-white'>
            <div className='container mx-auto space-y-4 p-4 lg:flex gap-4  py-20'>
                <h1 className=' lg:w-1/2 font-bold text-3xl'>Get started in a few minutes</h1>
                <div>
                    <p className='text-2xl -mt-3'>Create an account, link your bank account, and start buying & selling.</p>
                    <button className='btn btn-xs w-full lg:w-auto md:btn-md rounded-full mt-4 lg:btn-lg'>Create account</button>
                </div> 
            </div>
            <div className='container mx-auto lg:flex justify-around pb-16 lg:pb-24 ml-4'>
                <div className='border-s-2 mb-8 px-4'>
                    <h1 className='lg:text-8xl text-5xl mb-2 font-semibold'>$145B</h1>
                    <p className='uppercase text-base'>quarterly volume traded</p>
                </div>
                <div className='border-s-2 px-4 mb-8'>
                    <h1 className='lg:text-8xl text-5xl mb-2 font-semibold'>100+</h1>
                    <p className='uppercase text-base'>countries supported</p>
                </div>
                <div className='border-s-2 px-4 mb-8'>
                    <h1 className='lg:text-8xl text-5xl mb-2 font-semibold'>$130B</h1>
                    <p className='uppercase'>assets on platform</p>
                </div>
            </div>
        </div>
    );
};

export default GetStartedSection;