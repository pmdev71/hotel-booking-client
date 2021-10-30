
import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
  // destructuring
  const { _id, serviceName, img, details } = props.service;
  return (

    <Col>
      {/* start card */}
      <Card className="card">
        <Card.Img className="cardImage" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="cardTitle text-regular fs-3 fw-bold">{serviceName}</Card.Title>
          <hr></hr>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/service-details/${_id}`} >
            <Button className="w-100 fw-bold" variant="success">Details of {serviceName}</Button>
          </Link>

        </Card.Body>
      </Card>
    </Col>

  );
};

export default Service;