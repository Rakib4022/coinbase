import Image from 'next/image';
import React from 'react';

const CryptoItem = ({ img, title, Descr }) => {
    return (
        <div>
            <div className="card dark:text-white p-4 h-[600px] w-full ">
                <figure>
                    <Image
                        className='h-60 object-cover rounded-3xl'
                        src={img}
                        width={430}
                        height={220}
                        alt="Image" />
                </figure>
                <div className="my-4">
                    <h2 className="text-3xl mb-2 font-medium ">{title}</h2>
                    <p className='text-lg text-slate-600 '>{Descr}</p>
                </div>
            </div>
        </div>
    );
};

export default CryptoItem;