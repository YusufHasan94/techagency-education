import React, { useEffect, useState } from 'react';

const Instructors = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/courses")
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
            {
                courses.slice(0,4).map(instructor=>(
                    <div key={instructor._id} className='relative'>
                        <img src={instructor.instructor.image} alt="" className='rounded-xl h-72 w-96' />
                        <h1 className='text-xl text-center absolute bottom-0 left-0 bg-gray-300 bg-opacity-50 rounded-b-xl w-full py-2'>{instructor?.instructor?.name}</h1>
                    </div>
                ))
            }
        </div>
    );
};

export default Instructors;