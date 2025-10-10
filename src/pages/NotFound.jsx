import React from 'react';
import appNotFoundImg from "../assets/App-Error.png"
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-14'>
                <img src={appNotFoundImg} alt="" />
            </div>
            <div className='text-center'>
                <h2 className='font-bold text-2xl py-3'>OPPS!! APP NOT FOUND</h2>
                <p className='text-gray-500'>The App you are requesting is not found on our system.Please try another apps.</p>
                <Link to='/apps' className="btn text-white rounded-xl bg-gradient-to-l  from-[#9F62F2] to-[#632EE3] mt-2 px-6">Go Back</Link>
            </div>
        </div>
    );
};

export default NotFound;