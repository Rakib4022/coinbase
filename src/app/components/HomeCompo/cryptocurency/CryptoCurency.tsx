'use client'
import React from 'react';
import { useState } from 'react';
import CryptoCard from './CryptoCard';
import img1 from '../../../../../assets/currencylogo/bitcoin.png';
import img2 from '../../../../../assets/currencylogo/ethereum.png';
import img3 from '../../../../../assets/currencylogo/tether.png';
import img4 from '../../../../../assets/currencylogo/solana.png';
import img5 from '../../../../../assets/currencylogo/usdc.png';
import img6 from '../../../../../assets/currencylogo/xrp.png';
import img7 from '../../../../../assets/currencylogo/dia.png';
import img8 from '../../../../../assets/currencylogo/civic.png';
import img9 from '../../../../../assets/currencylogo/aventus.png';
import img10 from '../../../../../assets/currencylogo/synapse.png';
import img11 from '../../../../../assets/currencylogo/celo.png';
import img12 from '../../../../../assets/currencylogo/bittensor.png';
import { StaticImageData } from 'next/image';

interface CryptoData {
    image: StaticImageData;
    name: string;
    price: string;
    percentage: string;
    isIncrease: boolean;
}



const CryptoCurency = () => {
    const [activeTab, setActiveTab] = useState<string>('tradable');

    const tradableData: CryptoData[] = [
        { image: img1, name: 'Bitcoin', price: '7,264,774.01', percentage: '0.05', isIncrease: false },
        { image: img2, name: 'Ethereum', price: '279,830.07', percentage: '1.90', isIncrease: false },
        { image: img3, name: 'Tether', price: '119.53', percentage: '0.02', isIncrease: true },
        { image: img4, name: 'Solana', price: '16,290.13', percentage: '3.11', isIncrease: false },
        { image: img5, name: 'USDC', price: '119.55', percentage: '0.00', isIncrease: true },
        { image: img6, name: 'XRP', price: '62.60', percentage: '9.12', isIncrease: false },
    ];

    const topGainersData: CryptoData[] = [
        {image: img7, name: 'DIA', price: '103.24', percentage: '43.27', isIncrease: true },
        {image: img8, name: 'Civic', price: '21.63', percentage: '22.63', isIncrease: true },
        {image: img9, name: 'Aventus', price: '284.35', percentage: '19.95', isIncrease: true },
        {image: img10, name: 'Synapse', price: '56.03', percentage: '17.29', isIncrease: true },
        {image: img11, name: 'Celo', price: '90.39', percentage: '16.06', isIncrease: true },
        {image: img12, name: 'Bittensor', price: '70,468.27', percentage: '13.71', isIncrease: true },
    ];
    return (
        <div className='lg:flex gap-4 container mx-auto bg-slate-100 dark:bg-black py-20'>
            <div className=' flex flex-col justify-center  lg:w-1/2  lg:p-8 p-4 lg:space-y-6 space-y-3'>
                <h1 className='lg:text-4xl text-3xl '>Explore crypto like Bitcoin, Ethereum, and Dogecoin</h1>
                <p className='lg:text-3xl text-xl '>Simply and securely buy, sell, and manage hundreds of cryptocurrencies.</p>
                <div className="  max-w-sm   ">
                    <button className="btn btn-primary rounded-3xl text-white w-full lg:w-auto inline-block px-10">See more assets</button>
                </div>
            </div>
        
                <div className="p-8 lg:w-1/2">
                    <div className="flex justify-start space-x-4 mb-6">
                        <button
                            onClick={() => setActiveTab('tradable')}
                            className={`px-4 py-2 border rounded-3xl ${activeTab != 'tradable' ? ' text-black dark:text-white' : 'bg-transparent border-blue-500 text-blue-500'}`}
                        >
                            Tradable
                        </button>
                        <button
                            onClick={() => setActiveTab('gainers')}
                            className={`px-4 py-2 border rounded-3xl ${activeTab != 'gainers' ? ' text-black dark:text-white' : 'bg-transparent border-blue-500 text-blue-500'}`}
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
    );
};

export default CryptoCurency;