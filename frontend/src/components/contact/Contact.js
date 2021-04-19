import React, { useState } from 'react'
/* import Logo from '../common/Logo'
import Title from '../common/Title'
import Description from '../common/Description' */
import DescriptionContact from './DescriptionContact'
import { Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {

  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
    console.log(message)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    console.log(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('message send')
    console.log(message)
    console.log(email)
  }

  return (
    <div>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="optional email address"
                onChange={(event) => handleEmailChange(event)} />
            </Form.Group>
          </Col>
          <Col sm={4}></Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                placeholder='Please write your message here'
                rows={10}
                onChange={(event) => handleMessageChange(event)} />
            </Form.Group>
          </Col>
          <Col sm={4}></Col>
        </Row>
        <Row>
          <Col sm={4}></Col>
          <Col sm={4}>
            <Button type='submit'>
              Send
      </Button>
          </Col>
          <Col sm={4}></Col>
        </Row>
      </Form>
      <Row >
        <Col sm={4} xs={1}></Col>
        <Col sm={4} xs={10}>
          <DescriptionContact />
        </Col>
        <Col sm={4} xs={1}></Col>
      </Row>
    </div>
  )
}

export default Contact
