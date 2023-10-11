import React from 'react';
import ConditionalNav from '../../../Shared/ConditionalNav/ConditionalNav';
import { Outlet } from 'react-router-dom';
import Footer from '../../../Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <ConditionalNav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Dashboard;