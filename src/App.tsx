import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@mui/material';
import Login from './User/Login';

function App() {
  const context = React.createContext('');
  return (
    <div className="App">
      <Login>
        <TextField id="username" label="Username" variant="outlined" />
        <TextField id='password' type='password' label="Password" variant="outlined" />
      </Login>
    </div>
  );
}

export default App;
