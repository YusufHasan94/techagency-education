import React from 'react';

const CommonBanner = ({title}) => {
    return (
        <div className='bg-cyan-300 bg-opacity-30 md:h-96 h-52 flex flex-col justify-center items-center'>
            <h1 className='text-2xl md:text-6xl uppercase font-semibold'>{title}</h1>
        </div>
    );
};

export default CommonBanner;