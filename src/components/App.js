

import React,{ useState } from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
//import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route , Link, useHistory} from "react-router-dom"
import { Navbar, Button, Nav, Spinner } from "react-bootstrap"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import TodoForm from "./TodoForm"
import Home from "./Home"
import { useAuth } from "../contexts/AuthContext"
 
export default function App() {
  const { currentUser, logout } = useAuth()
  const history = useHistory()

 const   handleLogOut = async () =>{
    try {
          await logout()
          history.push("/login")
        } catch {
          //setError("Failed to log out")
        }
  }
  const ShowLogOut = ()=>{
    if( currentUser){
       return(
      <button onClick={handleLogOut}>Logout</button>
      )
    }else
    {
      return(
       <p>Not Loged In </p> 
      )
    }
   
    
  }

  return (

    <Container fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "0vh", marginTop:"20px" }}  >
      <div className="w-100" >
        <Router>
         
        <Navbar bg="dark" className="w-100" variant="dark">
          <Navbar.Brand as={Link} to='/'>Todo App</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
          <Nav.Link as={Link} to='/newtodo'>Add Todo</Nav.Link>
          <Nav.Link as={Link}  to='/signup'>Signup</Nav.Link>
          <Nav.Link as={Link} to='/login'>Login</Nav.Link>
          <Nav.Link as={Link} to='/login'>Logout</Nav.Link>
          <Nav.Link as={Link}  to='/update-profile'>profile</Nav.Link>
          </Nav>
        </Navbar>

            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute  path="/home" component={Home} />
              <PrivateRoute path="/newtodo" component={TodoForm}/>
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
         <ShowLogOut></ShowLogOut>
        </Router>
       
      </div>
    </Container>
  )
}

 