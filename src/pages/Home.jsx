import React from 'react';
import Banner from './Banner';
// import useApps from '../hooks/useCards';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';

const Home = () => {
    const apps = useLoaderData();
    const featuredApps = apps.slice(0, 8);
    return (
        <div>
            <Banner></Banner>
            <div className='text-center mt-8'>
                <h1 className='font-bold text-4xl'>Trending Apps</h1>
                <p className='text-gray-400 p-2'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {
                    featuredApps.map(app=> <AppCard key={app.id} app={app}></AppCard>)
                }
            </div>
            <div className='flex justify-center items-center mt-8'>
                <Link to='/apps' className='btn text-white rounded-lg bg-gradient-to-l  from-[#9F62F2] to-[#632EE3] px-8 py-4'>Show All</Link>
            </div>
            
        </div>
    );
};

export default Home;