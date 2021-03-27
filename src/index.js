import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./contexts/AuthContext";
import {TodoProvider} from "./contexts/TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <TodoProvider>
         <App />
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


