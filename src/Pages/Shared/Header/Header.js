import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooke/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            {/* start navbar */}
            <Navbar className="" bg="dark" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>

                    <Navbar.Brand as={Link} to="/home"><img className="logo-img mb-2" src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png" alt="" />{'  '}<span className="fs-3 fw-bold text-white">BD</span> <span className="fs-4 fw-bold text-danger">HotelBooking</span></Navbar.Brand>
                    <Navbar.Toggle className="bg-white" />
                    <Navbar.Collapse className="">

                        <Nav className="me-auto">
                            <Nav.Link className="bg-success rounded fw-bold text-white me-1 mb-1" as={Link} to="/home">Home</Nav.Link>
                            {user.email &&
                                <Nav.Link className="bg-success rounded fw-bold text-white me-1 mb-1" as={Link} to="/my-order">My Booking</Nav.Link>
                            }
                            {user.email &&
                                <Nav.Link className="bg-success rounded fw-bold text-white me-1 mb-1" as={Link} to="/all-order">Manage All Booking</Nav.Link>
                            }
                            {user.email &&
                                <Nav.Link className="bg-success rounded fw-bold text-white me-1 mb-1" as={Link} to="/add-new-service">Add New Hotel</Nav.Link>
                            }
                            <Nav.Link className="bg-success rounded fw-bold text-white me-1 mb-1" as={Link} to="/contact">Contact</Nav.Link>

                            {
                                user.email ? <Nav.Link onClick={logOut} className="bg-success rounded fw-bold text-white me-2 mb-1" >LogOut</Nav.Link> : <Nav.Link className="bg-success rounded fw-bold text-white me-2 mb-1" as={Link} to="/login">LogIn</Nav.Link>
                            }
                        </Nav>

                        <Nav>
                            {user.displayName ? <Navbar.Text>
                                <span className="text-success fw-bold">LogIn: </span><small className="text-white">{user.displayName}</small>
                            </Navbar.Text> : user.email && <Navbar.Text>
                                <span className="text-success fw-bold">LogIn: </span><small className="text-white">{user.email}</small>
                            </Navbar.Text>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};
export default Header;