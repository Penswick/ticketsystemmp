import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


export const LoginForm = ({handleOnChange, handleOnSubmit, switchForm, email, pass}) => {
  return (
    <Container>
        <Row> {/* LOGIN CODE BELOW */}
            <Col>
                <h1 className='text-info text-center'>Login</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                            type='email'
                            name='email'
                            placeholder='Email Address'
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
                    <Button as="input" type="submit" value="Login" />{' '}
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() => switchForm('reset')}>Forgot your password?</a>
            </Col>
        </Row>

    </Container>
  )
}

LoginForm.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
}
