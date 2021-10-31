import React from 'react';
import "./Testimonials.css"

const Testimonials = () => {
    return (
        <div>
            {/* testmonial section */}
            <div className="testimonials-clean">
                <div className="container pb-4">
                    <div className="intro">
                        <h2 className="text-center">Testimonials </h2>
                        <p className="text-center">The pauses can be acts of discovery, exploration and fun synonymous with travel as well. We’ve lived in 5 countries but have traveled through over 50. I’m not a big counter, I count the memories, the experiences and the friendships more.</p>
                    </div>
                    <div className="row people">
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">A life of full time travel is not as difficult as you may think. There are many clever strategies you can employ to travel around the world </p>
                            </div>
                            <div className="author"><img className="rounded-circle" src="https://www.faceapp.com/img/content/compare/beard-example-before@3x.jpg" />
                                <h5 className="name text-white">Ben Johnson</h5>
                                <p className="title text-white">CEO of BDH Inc.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">Prioritize. Work out what you are willing to sacrifice and what you aren’t and craft your travel experiences around that..</p>
                            </div>
                            <div className="author"> <img className="rounded-circle" src="https://www.faceplusplus.com/demo/images/demo-pic4.jpg" />
                                <h5 className="name text-white">Carl Kent</h5>
                                <p className="title text-white">Founder of BDH Co.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 item">
                            <div className="box">
                                <p className="description">The best way to do this is to live and work in expensive countries. Better to spend the local currency and save your own money. </p>
                            </div>
                            <div className="author"> <img className="rounded-circle" src="https://st.depositphotos.com/1008939/1880/i/600/depositphotos_18807295-stock-photo-portrait-of-handsome-man.jpg" />
                                <h5 className="name text-white">Emily Clark</h5>
                                <p className="title text-white">Owner of BDH Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;