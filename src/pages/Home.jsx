import React from 'react';
// import useApps from '../hooks/useCards';
import googlePlay from "../assets/fi_16076057.png"
import appStore from "../assets/Group (1).png"
import hero from "../assets/hero.png"

const Home = () => {
    // const {apps, loading, error} = useApps();
    // const featured = products.slice(0, 6);
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
                <img className='w-[700px] h-[550px]' src={hero} alt="" srcset="" />
            </div>
            <div className='border-2 border-purple-600 h-[400px] bg-gradient-to-l  from-[#9F62F2] to-[#632EE3]'>

            </div>
        </div>
    );
};

export default Home;