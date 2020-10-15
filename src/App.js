import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook'

function App() {
  return (
    <div className="App">
        <h3>Authenticate with Facebook</h3>
        <Facebook />
    </div>
  );
}

export default App;
