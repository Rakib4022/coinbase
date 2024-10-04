'use client'
import React from 'react';
import { useState } from 'react';
import CryptoCard from './CryptoCard';

interface CryptoData {
    name: string;
    price: string;
    percentage: string;
    isIncrease: boolean;
}



const CryptoCurency = () => {
    const [activeTab, setActiveTab] = useState<string>('tradable');

    const tradableData: CryptoData[] = [
        { name: 'Bitcoin', price: '7,264,774.01', percentage: '0.05', isIncrease: false },
        { name: 'Ethereum', price: '279,830.07', percentage: '1.90', isIncrease: false },
        { name: 'Tether', price: '119.53', percentage: '0.02', isIncrease: true },
        { name: 'Solana', price: '16,290.13', percentage: '3.11', isIncrease: false },
        { name: 'USDC', price: '119.55', percentage: '0.00', isIncrease: true },
        { name: 'XRP', price: '62.60', percentage: '9.12', isIncrease: false },
    ];

    const topGainersData: CryptoData[] = [
        { name: 'Bulzelle', price: '13.65', percentage: '13.65', isIncrease: true },
        { name: 'Wrapped Axelar', price: '78.06', percentage: '13.08', isIncrease: true },
        { name: 'Aptos', price: '1,016.75', percentage: '11.03', isIncrease: true },
        { name: 'XYO', price: '0.71', percentage: '9.78', isIncrease: true },
        { name: 'Stacks', price: '217.06', percentage: '6.96', isIncrease: true },
        { name: 'Across Protocol', price: '30.04', percentage: '5.57', isIncrease: true },
    ];
    return (
        <div className='lg:flex gap-4 container mx-auto bg-slate-100 dark:bg-black py-20'>
            <div className=' flex flex-col justify-center  lg:w-1/2  lg:p-8 p-4 lg:space-y-6 space-y-3'>
                <h1 className='lg:text-5xl text-3xl font-normal'>Explore crypto like Bitcoin, Ethereum, and Dogecoin</h1>
                <p className='lg:text-3xl text-xl '>Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
                <div className="  max-w-sm   ">
                    <button className="btn btn-primary rounded-3xl text-white w-full lg:w-auto inline-block px-10">See more assets</button>
                </div>
            </div>
            <div>
                <div className="p-8">
                    <div className="flex justify-start space-x-4 mb-6">
                        <button
                            onClick={() => setActiveTab('tradable')}
                            className={`px-4 py-2 border rounded-lg ${activeTab != 'tradable' ? ' text-black dark:text-white' : 'bg-transparent border-blue-500 text-blue-500'}`}
                        >
                            Tradable
                        </button>
                        <button
                            onClick={() => setActiveTab('gainers')}
                            className={`px-4 py-2 border rounded-lg ${activeTab != 'gainers' ? ' text-black dark:text-white' : 'bg-transparent border-blue-500 text-blue-500'}`}
                        >
                            Top Gainers
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
                        {activeTab === 'tradable' &&
                            tradableData.map((crypto, index) => <CryptoCard key={index} {...crypto} />)}

                        {activeTab === 'gainers' &&
                            topGainersData.map((crypto, index) => <CryptoCard key={index} {...crypto} />)}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CryptoCurency;