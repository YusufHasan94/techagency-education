import React from 'react';
import Banner from '../Banner/Banner';
import SubBanner from '../SubSection/SubBanner';
import FeaturedTopics from '../FeaturedTopics/FeaturedTopics';
import TopCourses from '../TopCourses/TopCourses';

const Home = () => {
    return (
        <div>
            <Banner/>
            <SubBanner/>
            <FeaturedTopics/>
            <TopCourses/>
        </div>
    );
};

export default Home;