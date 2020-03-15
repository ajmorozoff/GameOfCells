import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { dark } from '../common/theme';
import GameController from '../game/GameController'
import './App.css';

import { setGame } from '../../redux/actions';

import { Game } from '../../definitions';

function App() {
  const dispatch = useDispatch();
  dispatch(setGame(new Game(10, 10)));

  return (
    <ThemeProvider theme={dark}>
      <div className="App">
        <h1>Game of Cells</h1>
        <GameController />
      </div>
    </ThemeProvider>
  );
}

export default App;
