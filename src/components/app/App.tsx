import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { dark } from '../common/theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <h1>Game of Cells</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
