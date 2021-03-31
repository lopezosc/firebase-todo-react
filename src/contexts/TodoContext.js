
import React, { useContext, useState, useEffect } from "react"
import app from "../firebase"

const TodoContext = React.createContext();
const TodosRef = app.database().ref("Todo");

export function useTodo() {
  return useContext(TodoContext)
}
export function TodoProvider({ children }) {
   
  const [todoList, setTodoList] = useState([]);

  function addTodo(title, description){   
    TodosRef.push({
      title: title,
      description: description
    });
  }
 function removeTodo(id){
    TodosRef.child(id).remove();
 }
  useEffect(() => {
    const unsubscribe = TodosRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
      console.log('GOT IT...');
      });
    return unsubscribe
  }, [])

  const value = {
    todoList,
    addTodo,
    removeTodo
  }

  return (
    <TodoContext.Provider value={value}>
      { children}
    </TodoContext.Provider>
  )
}