import React from 'react'

import GlobalStyle from './GlobalStyle'
import RenderStore from '../utils/RenderStore'
import Routes from './Routes'

const App = () => (
  <>
    <GlobalStyle />
    <Routes />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <RenderStore />
  </>
)

export default App
