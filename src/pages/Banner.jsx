import React from 'react';
import googlePlay from "../assets/fi_16076057.png"
import appStore from "../assets/Group (1).png"
import hero from "../assets/hero.png"

const Banner = () => {
    return (
        <div className=''>
            <div>
                <h1 className='font-bold text-5xl text-center'>We Build <br /><span className='text-purple-500'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-center text-lg py-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <button className='btn btn-outline'>
                    <img src={googlePlay}></img>
                    Google Play</button>
                <button className='btn btn-outline'>
                    <img src={appStore}></img>
                    App Store</button>
            </div>
            <div className='flex justify-center items-center mt-6'>
                <img className='w-[700px] h-[550px]' src={hero} alt="" />
            </div>
            <div className='bg-gradient-to-l  from-[#9F62F2] to-[#632EE3]'>
                <div className='text-center'>
                    <h2 className='font-bold text-5xl text-white p-8'>Trusted by Millions, Built for You</h2>
                </div>
                <div className='flex md:flex-row flex-col justify-around text-white items-center p-8 text-center'>
                    <div className=''>
                        <h1 className='text-lg'>Total Downloads</h1>
                        <p className='font-bold text-2xl p-3'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <h1 className='text-lg'>Total Reviews</h1>
                        <p className='font-bold text-2xl p-3'>906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <h1 className='text-lg'>Active Apps</h1>
                        <p className='font-bold text-2xl p-3'>132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;