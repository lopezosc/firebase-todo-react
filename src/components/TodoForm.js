import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom";
import TodoList from "./TodoList";
//import  app   from "../firebase"
//import { useAuth } from "../contexts/AuthContext"
import { useTodo} from "../contexts/TodoContext";

export default function TodoForm() {
  const titleRef = useRef()
  const descriptionRef = useRef()
  //const { current } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const { addTodo , todoList } = useTodo();


  async function handleSubmit(e) {
    e.preventDefault();
    addTodo(titleRef.current.value, descriptionRef.current.value);
    titleRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className=" mb-1">Title</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" ref={titleRef} required />
            </Form.Group>
            <Form.Group id="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" ref={descriptionRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Submit Todo
            </Button>
          </Form>
           
        </Card.Body>
      </Card>
      <Card>
        <TodoList></TodoList>
      </Card>
    </>
  )
}