import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Collaboration = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(()=>{
        fetch(('/JSON/companies.json'))
        .then(res=>res.json())
        .then(data=>setCompanies(data))
    },[])
    return (
        <div className='max-w-screen-xl md:mx-auto mx-7 my-20'>
            <h1 className='text-center text-xl text-blue-950 font-semibold uppercase'>
                We collaborate with <span className='text-cyan-500'>10+</span> Leading universities & companies
            </h1>
            <div className='my-10 md:mx-96'>
                <Marquee className=''>
                    {
                        companies.map(company=>(
                            <div key={company.id} className='mx-5 w-10' >
                                <img src={company.icon} alt="" />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Collaboration;