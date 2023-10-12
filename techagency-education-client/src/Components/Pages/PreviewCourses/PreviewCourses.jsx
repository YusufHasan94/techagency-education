import React, { useContext, useState } from 'react';
import { FaRegClock, } from 'react-icons/fa';
import { FaArrowUpShortWide, FaLinkedinIn, FaLocationArrow, FaMarker, FaPhone, FaRegEnvelope } from "react-icons/fa6";
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const PreviewCourses = () => {
    const { user } = useContext(AuthContext);
    const course = useLoaderData();
    const { _id, title, image, overview, instructor, last_update_date, duration, price, level, curriculum } = course[0];

    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSelected = () => {
        if(user && user?.email){
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const enrolledDate = `${year}-${month}-${day}`;
            const selected = {
                user: user.email,
                course: course[0],
                enrolledDate: enrolledDate
            }
            console.log(selected);
            fetch('https://techagency-education-server.vercel.app/selected-courses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selected)
            })
                .then(res => res.json())
                .then(data => {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Course added successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }
        else{
            Swal.fire({
                title: 'Please login to Proceed',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            })
            .then(res=>{
                if(res.isConfirmed){
                    navigate('/login', {state:{from: location}})
                }
            })
        }


    }

    return (
        <div className='min-h-screen'>
            <div className='bg-cyan-300 bg-opacity-30 h-96 flex flex-col justify-center items-center'>
                <div className='text-center md:text-left p-5'>
                    <h1 className='text-4xl font-semibold text-blue-950'>{title}</h1>
                    <h1 className='mt-5 text-lg'>{overview}</h1>
                    <div className='flex flex-col md:flex-row md:gap-5 text-lg mt-2 font-semibold'>
                        <h1>{instructor.name}</h1> || <h1>Last Update: <span>{last_update_date}</span></h1>
                    </div>
                </div>
            </div>
            <div className='max-w-screen-xl md:mx-auto m-10'>
                <div>
                    <Tabs>
                        <TabList className="flex gap-10 text-xl font-semibold text-blue-950 uppercase">
                            <Tab className="border-b-2 border-transparent px-5 py-2 aria-selected:rounded-xl aria-selected:border-cyan-700 aria-selected:border-b-2">Curriculum</Tab>
                            <Tab className="border-b-2 border-transparent px-5 py-2 aria-selected:rounded-xl aria-selected:border-cyan-700 aria-selected:border-b-2">Instructor</Tab>
                        </TabList>
                        <div className='md:flex gap-10'>
                            <div className='my-10 md:w-1/2 w-full bg-gray-100 shadow-2xl p-5 rounded-xl'>
                                <TabPanel className="">
                                    <h2 className='text-xl font-medium'>Topics</h2>
                                    <div className='ml-2 my-2'>
                                        {
                                            curriculum.topics.map((topic, index) => (
                                                <h1 key={index} className='flex items-center gap-2'>
                                                    <FaMarker />{topic}
                                                </h1>
                                            ))
                                        }
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div>
                                        <div className='flex items-start  gap-5'>
                                            <img src={instructor.image} alt="" className='w-28 h-28 rounded-full' />
                                            <h1 className='text-lg md:text-xl font-semibold'>{instructor.name}</h1>
                                        </div>
                                        <div className='flex justify-end gap-2 my-5 text-xl'>
                                            <FaLinkedinIn />
                                            <FaPhone />
                                            <FaRegEnvelope />
                                        </div>
                                    </div>
                                </TabPanel>
                            </div>
                            <div className='md:w-96 bg-slate-200 m-4 md:absolute top-60 right-20 rounded-xl overflow-hidden'>
                                <div className=''>
                                    <img src={image} alt="" className='h-56 w-full' />
                                </div>
                                <div className='my-10 mx-5'>
                                    <h1 className='text-center text-2xl font-semibold'>{price}$</h1>
                                    <div className='text-center my-5'>
                                        <button className='px-5 py-2 bg-blue-950 text-white font-medium rounded-lg' onClick={handleSelected}>Select Course</button>
                                    </div>
                                    <div className=''>
                                        <div className='flex justify-between text-lg'>
                                            <h1 className='flex gap-2 items-center'><FaRegClock />Duration</h1>
                                            <h1>{duration}</h1>
                                        </div>
                                        <div className='flex justify-between text-lg'>
                                            <h1 className='flex gap-2 items-center'><FaArrowUpShortWide /> Level</h1>
                                            <h1>{level}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    );
};

export default PreviewCourses;