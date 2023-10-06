import React, { useEffect, useState } from 'react';

const SubBanner = () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        fetch('/JSON/SubBanner.json')
        .then(res=> res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='px-20 py-10 bg-blue-950 flex flex-col md:flex-row gap-10 md:gap-20 justify-center'>
            {
                items.map(item=>(
                    <div key={item.id} className='flex items-center gap-5'>
                        <img src={item.image} alt="" className='w-20'  />
                        <div>
                            <h1 className='text-cyan-400 text-2xl font-semibold'>
                                {item.text}
                            </h1> 
                            <p className='text-white text-xl'>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default SubBanner;