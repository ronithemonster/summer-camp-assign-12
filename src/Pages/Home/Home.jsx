import React from 'react';
import Banner from './Banner';
import About from './About';
import CountSection from './CountSection';
import PopularClass from './PopularClass';
import { Helmet } from 'react-helmet-async';
import PopularInstructor from './PopularInstructor';

const Home = () => {
    return (
        <div>
            <Helmet>
        <title> Flaire | Home</title>
      </Helmet>
     
            <Banner />
            <PopularInstructor />
            <About />
            <CountSection />
            <PopularClass />
        </div>
    );
};

export default Home;