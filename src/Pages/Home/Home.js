import React from 'react';
import MyCarousel from '../MyCarousel/MyCarousel';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* added caruser and services componamt */}
            <MyCarousel></MyCarousel>
            <Services></Services>
        </div>
    );
};

export default Home;