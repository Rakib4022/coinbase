
import { Button } from '@/components/ui/button';
import React from 'react';
import CryptoItem from './CryptoItem';
import cryptoimg1 from '../../../../../assets/cryptoimg1.webp';
import cryptoimg2 from '../../../../../assets/cryptoimg2.webp';
import cryptoimg3 from '../../../../../assets/cryptoimg3.webp';




const NewCrypto = () => {
    const cryptoData = [
        {
            "id": 1,
            "image": cryptoimg1,
            "title": "USDC: The digital dollar for the global crypto economy",
            "Description": "Coinbase believes crypto will be part of the solution for creating an open finalcial system that is both more effecient and more equitable. we co-founded the Center Consortium in 2018 to invest in the build of USDC, and since then it has become the secound largest stablecion by market capotalization."
        },
        {
            "id": 2,
            "image": cryptoimg2,
            "title": "Can crypto really replace your bank account?",
            "Description": "If you’re a big enough fan of crypto, you’ve probably heard the phrase “be your own bank” or the term “bankless” — the idea being that crypto can offer more control over your financial future than traditional finance. But how much of your financial life really can be accomplished via crypto?"
        },
        {
            "id": 3,
            "image": cryptoimg3,
            "title": "When is the best time to invest in crypto?",
            "Description": "Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause uncertainty, fear of missing out, or fear of participating at all. When prices are fluctuating, how do you know when to buy?"
        }
    ];


    return (
        <div className=''>
            <div className='container mx-auto mt-20'>
                <div className='lg:flex items-center gap-8 p-4  pt-16 dark:text-white justify-between'>
                    <div className='space-y-4 my-8'>
                        <h1 className='font-bold text-3xl'>USDC is the dollar for the digital age</h1>
                        <p className='text-2xl'>USDC gives you 24/7 access to payments and financial services. Trade, spend, and send faster and more efficiently.</p>
                    </div>
                    <Button className='p-6 mr-2 bg-blue-600 font-semibold rounded-full'>Read more</Button>
                </div>
                <div className='lg:flex p-4 gap-4'>
                    {
                        cryptoData.map(item => <CryptoItem key={item.id} img={item.image} title={item.title} Descr={item.Description} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewCrypto;