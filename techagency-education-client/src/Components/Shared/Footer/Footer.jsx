import React from 'react';
import icon from "../../../assets/education.png";
import { FaEnvelope, FaFacebookF, FaLocationArrow, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-blue-950 text-white mt-10 py-10'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
                <div>
                    <img src={icon} alt=""  className='w-20' />
                    <p className='my-4 text-lg'>We support programs that create advancement for people</p>
                    <div className='text-lg flex gap-4'>
                        <div className='p-2 border-2 rounded-full border-cyan-400 text-cyan-500 hover:bg-cyan-400 hover:text-white'>
                            <FaFacebookF className=''/>
                        </div>
                        <div className='p-2 border-2 rounded-full border-cyan-400 text-cyan-500 hover:bg-cyan-400 hover:text-white'>
                            <FaYoutube/>
                        </div>
                        <div className='p-2 border-2 rounded-full border-cyan-400 text-cyan-500 hover:bg-cyan-400 hover:text-white'>
                            <FaTwitter/>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Useful Links</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to="/">
                            <h1>About Us</h1>
                        </Link>
                        <Link to="/">
                            <h1>Privacy Policy</h1>
                        </Link>
                        <Link to="/">
                            <h1>Terms & Condition</h1>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Contact Us</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-3'>
                            <FaPhone className='text-cyan-500'/> <h1>+8801702020202</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaEnvelope className='text-cyan-500'/> <h1>education@gmail.com</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow className='text-cyan-500'/> <h1>New Street, Rajshahi, Bangladesh</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;