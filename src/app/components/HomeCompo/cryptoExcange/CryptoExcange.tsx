import { Button } from '@/components/ui/button';
import React from 'react';
import ExcangeCard from './ExcangeCard';

const CryptoExcange = () => {
    const excangedata = [
        {
            "id": 1,
            "image": "/public/assets/worldwide-2.svg",
            "title": "The largest public crypto company",
            "Description": "We operate with financial transparency"
        },
        {
            "id": 2,
            "image": "/public/assets/safe-2.svg",
            "title": "Your assets are protected",
            "Description": "Our risk management measures are designed to protect your assets"
        },
        {
            "id": 3,
            "image": "/public/assets/support-3.svg",
            "title": "Get the help you need, when you need it",
            "Description": "You can always contact our support team for quick solutions to common problems."
        },
        {
            "id": 4,
            "image": "/public/assets/economyGlobal-2.svg",
            "title": "Industry best practices",
            "Description": "Coinbase supports a variety of the most popular digital currencies."
        }
    ];
    return (
        <div className='container mx-auto'>
            <div className='lg:flex items-center gap-8 p-4  pt-16 dark:text-white justify-between'>
                <div className='space-y-4 my-8'>
                    <h1 className='font-bold text-3xl'>The most trusted cryptocurrency exchange</h1>
                    <p className='text-2xl'>We are the most trusted place for people and businesses to buy, sell, and manage crypto.</p>
                </div>
                <Button className='p-6 mr-2 bg-blue-600 font-semibold rounded-full'>Read more</Button>
            </div>
            <div className='lg:flex gap-10 mb-10'>
                {
                    excangedata.map(item => <ExcangeCard key={item.id} img={item.image} title={item.title} descr={item.Description} />)
                }
            </div>
        </div>
    );
};

export default CryptoExcange;