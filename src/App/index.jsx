import React from 'react'

import GlobalStyle from './GlobalStyle'
import RenderStore from '../utils/RenderStore'
import Routes from './Routes'

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <RenderStore />
    </>
  )
}

export default App
