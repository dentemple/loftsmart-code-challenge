import React from 'react'

import GlobalStyle from './GlobalStyle'
import RenderStore from '../utils/RenderStore'

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <RenderStore />
    </div>
  )
}

export default App
