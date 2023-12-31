import React from 'react';
import Banner from '../Banner/Banner';
import SubBanner from '../SubSection/SubBanner';
import FeaturedTopics from '../FeaturedTopics/FeaturedTopics';
import TopCourses from '../TopCourses/TopCourses';
import Stories from '../Stories/Stories';
import Collaboration from '../Collaboration/Collaboration';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SubBanner/>
            <FeaturedTopics/>
            <TopCourses/>
            <Stories/>
            <Collaboration/>
        </div>
    );
};

export default Home;