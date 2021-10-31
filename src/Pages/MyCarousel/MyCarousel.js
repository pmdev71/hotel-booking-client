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
                        src="https://aceoasistravelblog.files.wordpress.com/2015/10/954773hotel-banner.jpg"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://i.ytimg.com/vi/PA_ooTqMPOg/maxresdefault.jpg"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 caruselImage"
                        src="https://images.yourstory.com/production/document_image/mystoryimage/3ks4f7ym-Book-Online-Hotels-at-affordable-price.jpg"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MyCarousel;