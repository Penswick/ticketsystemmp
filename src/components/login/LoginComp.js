import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


export const LoginForm = ({handleOnChange, email, pass}) => {
  return (
    <Container>
        <Row> {/* LOGIN CODE BELOW */}
            <Col>
                <h1 className='text-info text-center'>Login</h1>
                <hr />
                <Form>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type='email'
                            name='email'
                            placeholder='Enter your Email Address'
                            value={email}
                            onChange = {handleOnChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={pass}
                            onChange = {handleOnChange}
                            required
                        />
                    </Form.Group>
                    <hr />
                    <Button as="input" type="submit" value="Submit" />{' '}
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!">Forgot your password?</a>
            </Col>
        </Row>

    </Container>
  )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}
