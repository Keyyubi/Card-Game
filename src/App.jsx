import React from 'react';
import { useSelector } from 'react-redux'

import Board from './components/board'
import Landing from './components/langding'
import Result from './components/result'

function App() {
  let pageState = useSelector(state => state.page)

  if (pageState === 0)
    return (
      <Landing />
    );
  else if (pageState === 1)
    return (
        <Board/>
    );
  else
    return (
      <Result/>
    );
}

export default App;
