import React, { useContext } from 'react';
import CommonBanner from '../../../Shared/CommonBanner/CommonBanner';
import { AuthContext } from '../../../../providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div className=''>
            <CommonBanner title="My profile" />
            <div className='max-w-fit md:mx-auto mx-10 my-20'>
                <div className='bg-gray-100 shadow-2xl py-5 px-20 rounded-xl flex flex-col md:flex-row justify-center gap-20'>
                    <div>
                        <img src={user?.photoURL} alt="" className='w-40 h-40 rounded-full' />
                    </div>
                    <div>
                        <h1 className='flex flex-col my-2'>
                            <span className='font-semibold'>Student Id:</span>
                            <span>not set</span>
                        </h1>
                        <h1 className='flex flex-col my-2'>
                            <span className='font-semibold'>Full Name:</span>
                            <span>{user?.displayName}</span>
                        </h1>
                        <h1 className='flex flex-col my-2'>
                            <span className='font-semibold'>Email:</span>
                            <span>{user?.email}</span>
                        </h1>
                        <h1 className='flex flex-col my-2'>
                            <span className='font-semibold'>Phone Number:</span>
                            <span>{user?.phoneNumber?phoneNumber:'not set'}</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;