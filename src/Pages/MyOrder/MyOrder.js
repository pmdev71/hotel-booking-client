import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useAuth from '../../hooke/useAuth';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const myOrderr = orders.filter(order => order.userEmail === user.email);

    useEffect(() => {
        fetch('https://polar-hamlet-97981.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    // delete an order 
    const handelDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order?');
        if (proceed) {
            const url = `https://polar-hamlet-97981.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully.');
                        const remainingOrders = myOrderr.filter(orderrr => orderrr._id !== id);
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
                    <h2 className="fw-bold w-100 mx-auto p-2 mb-4 bg-secondary text-white">Order available : {myOrderr.length} </h2>
                    <div>
                        {
                            myOrderr.map(orderr => <div className="m-2 p-4 rounded bg-info bg-opacity-10 w-100 mx-auto ">
                                <h5><span className="text-primary fw-bolder">Hotel Name:</span> {orderr.ServiceName} </h5>
                                <br />
                                <h6><span className="text-primary fw-bolder">Booking For:</span> {orderr.dateFrom} <span className="text-danger fw-bolder" >To</span> {orderr.dateTo}</h6>
                                <br />
                                <h6><span className="text-primary fw-bolder">Status:</span> {orderr.orderStatus} </h6>
                                <br />
                                <button className=" btn btn-danger fw-bold" onClick={() => handelDeleteOrder(orderr._id)}>Delete</button>

                            </div>)
                        }
                    </div>
                </div>


            }
        </div>

    );
};

export default MyOrder;