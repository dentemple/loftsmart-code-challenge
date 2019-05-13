import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Properties from '../components/screens/Properties'

const Routes = () => (
  <Switch>
    <Route path='/' component={Properties} />
  </Switch>
)

export default Routes
