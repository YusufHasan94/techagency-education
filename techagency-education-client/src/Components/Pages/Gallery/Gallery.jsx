import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Gallery = () => {
    const images = useLoaderData();
    console.log(images);
    return (
        <div>
            <div className='bg-cyan-300 bg-opacity-30 md:h-96 h-52 flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-6xl uppercase font-semibold'>gallery</h1>
            </div>
            <div className='max-w-screen-xl mx-auto my-20'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {
                    images.map(image=>(
                        <div key={image._id} className='bg-gray-100 rounded-xl overflow-hidden hover:bg-blue-950 hover:text-white'>
                            <img src={image.image} alt="" className='h-56 w-full' />
                            <h1 className='text-lg font-semibold text-center m-5'>{image.caption}</h1>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    );
};

export default Gallery;