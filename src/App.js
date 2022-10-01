import './App.css';
import React, { Fragment } from 'react';
import Header from './components/Header';
import Character from './components/Characters';
import './static/css/main.css';
import './static/css/header.css';

function App() {
  return (
    <Fragment>
      <Header title="Rick And Morty Api" />
      <Character />
    </Fragment>
  );
}

export default App;
