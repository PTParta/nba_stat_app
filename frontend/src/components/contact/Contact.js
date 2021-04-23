import React, { useState, useEffect } from 'react'
import { smSide, xsSide, smCenter, xsCenter } from '../../styling/columnWidths'
import DescriptionContact from './DescriptionContact'
import { Row, Col, Form, Button } from 'react-bootstrap'
import contactService from '../../services/contact'
import ReactGa from 'react-ga'
require('dotenv').config()

const Contact = () => {

  useEffect(() => {

    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_CODE)
    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])

  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [sentEmptyMessage, setSentEmptyMessage] = useState(false)

  const handleMessageChange = (event) => {
    setMessage(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (message === '') {
      setSentEmptyMessage(true)
      return
    }
    setMessageSent(true)
    contactService.sendMessage(email, message)
    console.log('message send')
    console.log(message)
    console.log(email)
  }

  return (
    <div>
      {!messageSent
        ? <>
          <Form onSubmit={(event) => handleSubmit(event)}>
            <Row>
              <Col sm={smSide}></Col>
              <Col sm={smCenter}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="email"
                    placeholder="optional email address"
                    onChange={(event) => handleEmailChange(event)} />
                </Form.Group>
              </Col>
              <Col sm={smSide}></Col>
            </Row>
            <Row>
              <Col sm={smSide}></Col>
              <Col sm={smCenter}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    as="textarea"
                    placeholder='Please write your message here'
                    rows={3}
                    onChange={(event) => handleMessageChange(event)} />
                </Form.Group>
              </Col>
              <Col sm={smSide}></Col>
            </Row>
            {sentEmptyMessage
              ? <>
                <Row>
                  <Col sm={smSide}></Col>
                  <Col sm={smCenter}>
                    <div style={{ color: 'white' }}>
                      <p>Before sending, please write your message.</p>
                    </div>

                  </Col>
                  <Col sm={smSide}></Col>
                </Row>
              </>
              : <></>}

            <Row>
              <Col sm={smSide}></Col>
              <Col sm={smCenter}>
                <Button type='submit'>
                  Send
                </Button>
              </Col>
              <Col sm={smSide}></Col>
            </Row>
          </Form>
          <Row >
            <Col sm={smSide} xs={xsSide}></Col>
            <Col sm={smCenter} xs={xsCenter}>
              <DescriptionContact />
            </Col>
            <Col sm={smSide} xs={xsSide}></Col>
          </Row>
        </>
        : <>
          <br></br>
          <br></br>
          <br></br>
          <Row style={{ textAlign: 'center' }}>
            <Col sm={smSide}></Col>
            <Col sm={smCenter}>
              <p style={{ color: 'white' }}>Thank you for your message.</p>
            </Col>
            <Col sm={smSide}></Col>
          </Row>
        </>
      }
    </div>
  )
}

export default Contact
