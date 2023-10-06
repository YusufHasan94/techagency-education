import React, { useEffect, useState } from 'react';

const FeaturedTopics = () => {
    const [topics, setTopics] = useState([]);
    useEffect(()=>{
        fetch('/JSON/topics.json')
        .then(res=>res.json())
        .then(data=>setTopics(data))
    },[])
    return (
        <div className='max-w-screen-xl md:mx-auto mx-5 my-20'>
            <h1 className='text-2xl md:text-4xl font-semibold text-blue-950 uppercase text-center md:text-left'>
                Featured topics by category
            </h1>
            <div className='my-20 grid grid-cols-1 md:grid-cols-4 gap-10'>
                {
                    topics.map(topic=>(
                        <div key={topic.id} className='bg-gray-200 shadow-2xl flex gap-2 items-center p-4 rounded-xl hover:bg-blue-950 hover:text-white'>
                            <img src={topic.subject_image} alt="" className='w-20' />
                            <h1 className='text-2xl'>{topic.subject_name}</h1>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default FeaturedTopics;