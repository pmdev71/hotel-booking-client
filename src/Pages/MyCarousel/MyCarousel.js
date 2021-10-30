import React from 'react';
import "./MyCarousel.css"
import { Carousel } from 'react-bootstrap';

const MyCarousel = () => {
    return (
        <div>
            {/* start carusel */}
            <Carousel className="w-75 mx-auto">
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fluid caruselImage"
                        src="https://content.specsavers.com/anz/au/assets/img/eye_health/landing/eye-health_eyetest-banner-545x273.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Your Cataract Surgery</h3>
                        <p>Removing Cloudy Vision Quickly and Painlessly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://cataractsurgeryca.com/wp-content/uploads/2020/01/Cataract-Surgery-banner-male.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Dry Eye Treatment</h3>
                        <p>Dry Eye Is More Common Than You Think!.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://www.apollospectra.com/wp-content/uploads/2016/01/banner1-1032x272.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Premium Lens Implants</h3>
                        <p>Finding the Lens That’s Right for You.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MyCarousel;