import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
// import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooke/useAuth';

const Login = () => {
    const { user, signInUsingGoogle, signInWithPassword, logInWithPassword, error } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errormsg, setErrormsg] = useState("");
    const [isNotLogin, setIsNotlogin] = useState(false);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                // setUser(result.user);
            })
        // .catch((error) => {
        //     setError(error.message);
        // })
        // .catch((error) => {
        //     setError(error.message);
        // })
        // .finally(() => setIsLoading(false));
    }


    const toggleLogin = e => {
        setIsNotlogin(e.target.checked);
    }
    const handelEmailChange = e => {
        setEmail(e.target.value);
    }
    const handelPasswordChange = e => {
        setPassword(e.target.value);
    }
    const handelRegistration = e => {
        e.preventDefault();
        setErrormsg("");
        if (password.length < 6) {
            setErrormsg("Password muse be 6 character or more! ");
            return;
        }
        console.log(email, password);
        signInWithPassword(email, password);

    }

    const handelLogin = e => {
        e.preventDefault();
        setErrormsg("");
        if (password.length < 6) {
            setErrormsg("Password muse be 6 character or more! ");
            return;
        }
        console.log(email, password);
        logInWithPassword(email, password);

    }

    return (
        <>
            {user.email ? <div><h4 className="text-primary fs-bold mt-5">Successfully Login</h4><Link to="/home"><button className="btn btn-primary mt-3">HOME</button></Link></div> : <div className="border rounded border-dark w-75 mx-auto m-5 p-5">
                <div>
                    <h2 className="fw-bold p-2 my-4 bg-secondary text-white ">{isNotLogin ? "Registration First" : "Loging Now"}</h2>
                    {/* email password login registration form */}
                    <Form className="w-50 mx-auto mt-5">
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                            <h5 className="text-danger"> {error} </h5>
                            <h5 className="text-danger"> {errormsg} </h5>
                            <Form.Label className="fs-6 fw-bold" column sm={2}>
                                Email:
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onBlur={handelEmailChange} type="email" placeholder="Email" required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                            <Form.Label className="fs-6 fw-bold" column sm={2}>
                                Password:
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control onBlur={handelPasswordChange} type="password" placeholder="Password" required />
                            </Col>
                        </Form.Group>

                        <Form.Group onChange={toggleLogin} as={Row} className="mb-3" controlId="formHorizontalCheck">
                            <Col sm={{ span: 1, offset: 2 }}>
                                <Form.Check label="New?" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="my-3">
                            <Col sm={{ span: 8, offset: 2 }}>
                                {
                                    isNotLogin ? <Button onClick={handelRegistration}>Register</Button> : <Button onClick={handelLogin}>Login</Button>}
                            </Col>
                        </Form.Group>
                    </Form>

                </div>

                <p>-----------OR-----------</p>
                {/* gmail login button */}
                <button className="btn btn-primary mb-3" onClick={handleGoogleLogin}>Google Sign in</button>
            </div>
            }
        </>
    );
};

export default Login;