

import React, { useRef, useState } from "react"
import { Container,Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function ResetPassword() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login , sendPasswordResetEmail} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await sendPasswordResetEmail(emailRef.current.value)
      setLoading(false)
      history.push("/")
    } catch {
      setError("Failed to Send Email for Password Reset")
    }

  }

  return (
    <>
     <Container   className="d-flex align-items-center justify-content-center">
      <Card  className="w-100" style={{ maxWidth:'400px' }}>
        <Card.Body>
          <h2 className="text-center mb-4">Send Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="w-100" type="submit">
             Send Email to Reset Password
            </Button>
          </Form>
          
        </Card.Body>
      </Card>
      </Container>
      
    </>
  )
}