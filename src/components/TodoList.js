import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useTodo} from "../contexts/TodoContext";

export default function TodoList() {
  const { todoList } = useTodo();

  
    return (
      <>
        <Card>
          <Card.Body>
    <h2 className="text-center mb-1"></h2>
           {  todoList.map(item =>(
             <>
             <h3>{item.title}</h3>
             <p>{item.description}</p>
             </>
           ))}
             
          </Card.Body>
        </Card>
         
      </>
    )
  }