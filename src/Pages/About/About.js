import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div className="border rounded border-dark w-75 mx-auto m-5 p-5">
            <div className="">
                <div class="container">
                    <div class="row mt-4">
                        <div class="col text-center">
                            <h2 className="fw-bold p-2 mb-4 bg-secondary text-white">Our Specialist</h2>
                        </div>
                    </div>
                    {/* start about us div */}
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <img class="img-fluid aboutus-img p-4 rounded-circle" src="https://dhakaeyecarehospital.org/image/47738-dr.-harun-ur-rashid.jpg" alt="" />
                            <h5>Glaucoma Specialist</h5>
                            <p><i>Dr. Harun Ur Rashid</i></p>
                        </div>
                        <div class="col-md-4 text-center">
                            <img class="img-fluid aboutus-img p-4 rounded-circle" src="https://dhakaeyecarehospital.org/image/0dad9-img_07755.jpg" alt="" />
                            <h5>Consultant Ophthalmologist</h5>
                            <p><i>Dr. Nusrat Farouque</i></p>
                        </div>
                        <div class="col-md-4 text-center">
                            <img class="img-fluid aboutus-img p-4 rounded-circle" src="https://dhakaeyecarehospital.org/image/af548-dr.-kowshik-1.jpg" alt="" />
                            <h5>Vitreo-Retina Specialist</h5>
                            <p><i>Dr. Kousik Chowdhury</i></p>
                        </div>
                    </div>

                    <div class="row mb-md-3">
                        <div class="col-md-4 text-center">
                            <img class="img-fluid aboutus-img p-4 rounded-circle" src='https://dhakaeyecarehospital.org/image/df076-dr.-ashiqur-rahman.jpg' alt="" />
                            <h5>Squint Specialist</h5>
                            <p><i>Dr. Ashiqur Rahman Akanda</i></p>
                        </div>
                        <div class="col-md-4 text-center">
                            <img class="img-fluid aboutus-img p-4 rounded-circle" src="https://dhakaeyecarehospital.org/image/cd70e-montasir.jpg" alt="" />
                            <h5>Phaco Specialist</h5>
                            <p><i>Dr. Muntasir-Bin-Shahid</i></p>
                        </div>
                        <div class="col-md-4 text-center">
                            <img class="img-fluid aboutus-img p-4 rounded-circle" src="https://dhakaeyecarehospital.org/image/5add7-dr.-bahauddin-malik.jpg" alt="" />
                            <h5>Oculoplasty Specialist</h5>
                            <p><i>Dr. A.S.M.M Quadir</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;