import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useTodo} from "../contexts/TodoContext";

export default function TodoList() {
  const { todoList, removeTodo } = useTodo();

   function handleDelete(id){
    removeTodo(id);
   }
    return (
      <>
        <Card>
          <Card.Header>
           <h3>  Todo List </h3> 
          </Card.Header>
          <Card.Body>
          <h2 className="text-center mb-1"></h2>
           {  todoList.map(item =>(
             <Card key={item.id} className="mb-40" >
               <Card.Body>
                  <h3  >{item.title}</h3>
                  <p>
                  {item.description} 
                </p>
               </Card.Body>
            
             <Button  className=" btn btn-sm btn-danger "style={{ maxWidth:'100px' }} onClick={() => handleDelete(item.id)}>Delete</Button>
             </Card>
           ))}
             
          </Card.Body>
        </Card>
         
      </>
    )
  }

