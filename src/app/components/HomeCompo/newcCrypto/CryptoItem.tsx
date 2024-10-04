import Image from 'next/image';
import React from 'react';

const CryptoItem = ({ img, title, Descr }) => {
    return (
        <div>
            <div className=" bg-base-100 h-[600px] ">
                <figure>
                    <Image
                        src={img}
                        width={350}
                        height={200}
                        alt="Image" />
                </figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold text-black">{title}</h2>
                    <p className='text-lg text-slate-600 '>{Descr}</p>
                </div>
            </div>
        </div>
    );
};

export default CryptoItem;