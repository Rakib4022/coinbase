'use client'
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

interface CryptoCardProps {
  image: StaticImageData;
  name: string;
  price: string;
  percentage: string;
  isIncrease: boolean;
}

const CryptoCard: React.FC<CryptoCardProps> = ({image, name, price, percentage, isIncrease }) => {
  return (
    <div className="dark:text-white dark:border rounded-2xl shadow px-2 lg:px-6 py-2 w-full">
      <Image width={50} src={image} alt='image' className='py-2' />
      <h3 className="text-base font-semibold ">{name}</h3>
      <p className="text-gray-700 text-sm mb-4">BDT {price}</p>
      <p className={`text-3xl  ${isIncrease ? 'text-green-800' : 'text-red-500'} flex items-center justify-center gap-2`}>
        {isIncrease ? <FaArrowUp /> : <FaArrowDown />} {percentage}%
      </p>
    </div>
  );
};

export default CryptoCard;
