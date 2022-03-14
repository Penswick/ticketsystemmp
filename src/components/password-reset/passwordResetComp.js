import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';


export const ResetPassword = ({handleOnChange, handleOnResetSubmit, switchForm, email}) => {
  return (
    <Container>
        <Row> {/* LOGIN CODE BELOW */}
            <Col>
                <h1 className='text-info text-center'>Reset password</h1>
                <hr />
                <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                
                    <hr />
                    <Button as="input" type="submit" value="Reset" />{' '}
                </Form>
                <hr />
            </Col>
        </Row>
        <Row>
            <Col>
                <a href="#!" onClick={() => switchForm('login')}>Back to login</a>
            </Col>
        </Row>

    </Container>
  )
}

ResetPassword.propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    handleOnResetSubmit: PropTypes.func.isRequired,
    switchForm: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
}
