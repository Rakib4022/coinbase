'use client'
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

interface CryptoCardProps {
  name: string;
  price: string;
  percentage: string;
  isIncrease: boolean;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, price, percentage, isIncrease }) => {
  return (
    <div className="bg-white dark:text-black rounded-2xl shadow p-4 w-full text-center">
      <h3 className="text-base font-semibold ">{name}</h3>
      <p className="text-gray-700 mb-2">BDT {price}</p>
      <p className={`text-xl font-bold ${isIncrease ? 'text-green-800' : 'text-red-500'} flex items-center justify-center gap-2`}>
        {isIncrease ? <FaArrowUp /> : <FaArrowDown />} {percentage}%
      </p>
    </div>
  );
};

export default CryptoCard;
