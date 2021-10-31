import React from 'react';
import Advantage from '../Advantage/Advantage';
import Testimonials from '../Testimonials/Testimonials';
import MyCarousel from '../MyCarousel/MyCarousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* added caruser, services, advantage, testmonial componamt */}
            <MyCarousel></MyCarousel>
            <Services></Services>
            <Advantage></Advantage>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;