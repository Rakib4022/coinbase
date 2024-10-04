import Link from 'next/link';
import React from 'react';
import { GoDotFill } from "react-icons/go";
import { LuGlobe } from "react-icons/lu";

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <a className=' text-blue-600 font-bold text-2xl'>coinbase</a>
                    <p className='text-xl text-slate-500'> © 2024 Coinbase</p>
                    <ul className='flex items-center  gap-1'>
                        <Link href=""><li className='text-base text-blue-500'>Blog</li></Link>
                        <GoDotFill />
                        <Link href=""><li className='text-base text-blue-500'>Twitter</li></Link>
                        <GoDotFill />
                        <Link href=""><li className='text-base text-blue-500'>Facebook</li></Link>
                    </ul>
                    <ul className='flex items-center mt-6 gap-4'>
                        <LuGlobe size={20} />
                        <Link href=""><li className='text-base divider'>Global</li></Link>
                        <Link href=""><li className='text-base border-s-2 border-black pl-4'>English</li></Link>
                    </ul>

                </aside>
                <nav>
                    <h6 className=" text-base font-bold text-black">Company</h6>
                    <Link className='text-base font-semibold text-slate-500' href="">About</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Careers</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Affiliates</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Blog</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Press</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Security</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Investors</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Vendors</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Legal & privacy</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Cookie policy</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Cookie preferences</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Do Not Share My Personal</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Information</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Digital Asset Disclosures</Link>
                
                    <h6 className=" text-base font-bold mt-6 text-black">Learn</h6>
                    <Link className='text-base font-semibold text-slate-500' href="">Bitcoin Halving</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Ethereum Merge</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Explore</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Coinbase Bytes newsletter</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Crypto basics</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Tips & tutorials</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Crypto glossary</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Market updates</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">What is Bitcoin?</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">What is crypto?</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">What is a blockchain?</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">How to set up a crypto wallet</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">How to send crypto</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Taxes</Link>
               </nav>
                <nav>
                    <h6 className=" text-base font-bold text-black">Individuals</h6>
                    <Link className='text-base font-semibold text-slate-500' href="">Buy & sell</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Earn free crypto</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Wallet</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Card</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Coinbase One</Link>
                   
                    <h6 className=" text-base font-bold mt-6 text-black">Businesses</h6>
                    <Link className='text-base font-semibold text-slate-500' href="">Institutional</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Prime</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Asset Hub</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Commerce</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Derivatives Exchange</Link>

                    <h6 className=" text-base font-bold mt-6 text-black">Developers</h6>
                    <Link className='text-base font-semibold text-slate-500' href="">Developer Platform</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Base</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Staking</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Onramp</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Wallets</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Wallet SDK</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Coinbase App</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Exchange API</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Prime API</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Base Node</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">OnchainKit</Link>
                </nav>
                <nav>
                    <h6 className=" text-base font-bold text-black">Support</h6>
                    <Link className='text-base font-semibold text-slate-500' href="">Help center</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Contact us</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Create account</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">ID verification</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Account information</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Payment methods</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Account access</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Supported crypto</Link>
                    <Link className='text-base font-semibold text-slate-500' href="">Status</Link>
                </nav>

            </footer>
        </div>
    );
};

export default Footer;