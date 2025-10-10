import React from 'react';
import errorImg from "../assets/error-404.png"
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-14'>
                <img src={errorImg} alt="" />
            </div>
            <div className='text-center'>
                <h2 className='font-bold text-2xl py-3'>Oops, page not found!</h2>
                <p className='text-gray-500'>The page you are looking for is not available.</p>
                <Link to='/' className="btn text-white rounded-xl bg-gradient-to-l  from-[#9F62F2] to-[#632EE3] mt-2 px-6">Go Back</Link>
            </div>
        </div>
    );
};

export default ErrorPage;