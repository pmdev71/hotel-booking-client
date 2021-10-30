import React, { useRef } from 'react';

const AddNewService = () => {
    const nameRef = useRef();
    const detailsRef = useRef();
    const moreDetailsRef = useRef();
    const urlRef = useRef();

    const handelAddService = e => {
        const serviceName = nameRef.current.value;
        const details = detailsRef.current.value;
        const moreDetails = moreDetailsRef.current.value;
        const img = urlRef.current.value;
        const newService = { serviceName, details, moreDetails, img };

        fetch('http://localhost:5000/offers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Service Add Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="border rounded border-dark w-75 mx-auto m-5 p-5">
            <h2 className="fw-bold p-2 mb-4 bg-secondary text-white">Add New Service</h2>
            <form onSubmit={handelAddService}>
                <input className="w-50 mb-2" type="text" placeholder="Name" ref={nameRef} required />
                <br />
                <input className="w-50 mb-2" type="text" placeholder="Short Info" ref={detailsRef} required />
                <br />
                <textarea className="w-50 mb-2" name="message" rows="8" placeholder="Long Details" ref={moreDetailsRef} required></textarea>
                <br />
                <input className="w-50 mb-2" type="url" placeholder="Image URL" ref={urlRef} required />
                <br />
                <input className="w-25 btn btn-primary" type="submit" value="ADD" />

            </form>

        </div>
    );
};

export default AddNewService;