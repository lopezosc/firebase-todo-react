

import React, { useState } from "react"
import {Container, Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import TodoList from "../components/TodoList"

export default function Home() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <Container   className="d-flex align-items-center justify-content-center">
      <Card className="w-100" style={{ maxWidth:'80%' }}  >
        <Card.Body>
         <h2 className="text-center ">Welcome to TODO APP</h2>
         <TodoList>

         </TodoList>
        </Card.Body>

        <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
        </div>
      </Card>
      
      </Container>
    </>
  )
}
