import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../hooke/useAuth';


const ServiceDetails = () => {
    const { user } = useAuth();
    const dateFromRef = useRef();
    const dateToRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const { serviceId } = useParams();
    const [services, setServices] = useState([])
    const servicee = services.filter(service => service._id === serviceId);
    const ServiceName = servicee[0]?.serviceName;
    const userEmail = user.email;
    const orderStatus = 'Pending';

    useEffect(() => {
        fetch("https://polar-hamlet-97981.herokuapp.com/offers")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const orderHandel = e => {
        const dateFrom = dateFromRef.current.value;
        const dateTo = dateToRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const newOrder = { userEmail, dateFrom, dateTo, phone, address, ServiceName, orderStatus };
        fetch('https://polar-hamlet-97981.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Order placed Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }


    return (
        <div className="d-flex justify-content-center">
            {/* service details card */}
            <div className="card m-5 w-75" >
                <div className="row g-0">
                    <div className="">
                        <img src={servicee[0]?.img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="">
                        <div className="card-body">
                            <h5 className="card-title bg-warning fw-bold fs-3">{servicee[0]?.serviceName}</h5>
                            <p className="card-text fs-5">{servicee[0]?.moreDetails}</p>
                            <form onSubmit={orderHandel}>

                                <h5 className="text-center">Booking From:</h5>
                                <input className="mb-2 w-50" type="date" required placeholder="Booking From" ref={dateFromRef} />
                                <br />
                                <h5 className="text-center">Booking To:</h5>
                                <input className="mb-2 w-50" type="date" required placeholder="Booking To" ref={dateToRef} />
                                <br />

                                <h5 className="text-center mt-2">Address:</h5>
                                <input className="w-50" type="text" required placeholder="Your Address" ref={addressRef} />
                                <br />

                                <h5 className="text-center mt-2">Contact Number:</h5>
                                <input className="w-50" type="number" required placeholder="Phone" ref={phoneRef} />
                                <br />
                                <button className="btn btn-primary w-25 m-2 fw-bold" type="submit">Booking Now</button>
                            </form>
                            <Link to="/home"><button className="btn btn-primary w-25 fw-bold">Back</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;