import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { dark } from '../common/theme';
import GameController from '../game/GameController'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={dark}>
        <GameController />
    </ThemeProvider>
  );
}

export default App;
