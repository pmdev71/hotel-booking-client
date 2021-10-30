import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));

    }, []);

    // delete an order 
    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }
    return (
        <div>
            {orders.length === 0 ?
                <Button className="my-5 " variant="primary">
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button> :
                <div className="border rounded border-dark w-75 mx-auto m-5 p-5">
                    <h2 className="fw-bold p-2 mb-4 bg-secondary text-white">Order available : {orders.length} </h2>

                    <div>
                        {
                            orders.map(order => <div className="m-2 p-4 rounded bg-info bg-opacity-25 w-100 mx-auto ">
                                <h4> Order ID: {order._id} </h4>
                                <br />
                                <h3> Service Name: {order.ServiceName} </h3>
                                <br />
                                <h4> Status: {order.orderStatus} </h4>
                                <br />
                                <button className=" btn btn-danger" onClick={() => handelDeleteOrder(order._id)}>Delete</button></div>)
                        }
                    </div>
                </div>
            }
        </div>

    );
};

export default AllOrders;