import React from 'react';
import errorImage from "../../../assets/404-error.png";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';

const Error = () => {
    return (
        <div className='flex flex-col  justify-center items-center'>
            <div>
                <img src={errorImage} alt="" />
            </div>
            <Link to="/">
                <button className='bg-blue-950 px-4 py-2 rounded-lg text-xl text-white flex items-center gap-4'> 
                    <FaArrowLeftLong/>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default Error;