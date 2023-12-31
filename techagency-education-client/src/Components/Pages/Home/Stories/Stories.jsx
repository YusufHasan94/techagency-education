import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaGraduationCap } from 'react-icons/fa';
import { ThreeDots } from 'react-loader-spinner';

const Stories = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://techagency-education-server.vercel.app/stories')
            .then(res => res.json())
            .then(data => {
                setStories(data);
                setLoading(false);
            })
    }, [])
    return (
        <div className='max-w-screen-xl md:mx-auto my-20 mx-7'>
            <h1 className='text-center text-2xl md:text-4xl text-blue-950 font-semibold uppercase'>
                Stories of Successful Students
            </h1>
            <div className='my-20 md:mx-0'>
                {
                    loading ?
                        <div className='flex justify-center items-center'>
                            <ThreeDots
                                height="80"
                                width="80"
                                radius="9"
                                color="#172554"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                        </div> :
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 2,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 3,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            style={{ height: '500px' }}
                        >
                            {
                                stories.map(story => (
                                    <SwiperSlide key={story._id}>
                                        <div className='bg-gray-100 shadow-2xl rounded-xl relative p-4' style={{ height: '475px' }}>
                                            <div className='flex justify-center'>
                                                <img src={story.image} alt="" className='w-32 h-32 rounded-full' />
                                            </div>
                                            <div className='px-5 pt-5'>
                                                <p>{story.description}</p>
                                            </div>
                                            <div className='px-5 flex items-center gap-5 absolute bottom-5'>
                                                <div className='text-4xl'>
                                                    <FaGraduationCap />
                                                </div>
                                                <div >
                                                    <h1 className='text-xl font-semibold'>{story.name}</h1>
                                                    <h1 className='opacity-80'>{story.date_of_feedback}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                }
            </div>
        </div>
    );
};

export default Stories;