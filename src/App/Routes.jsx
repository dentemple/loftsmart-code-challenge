import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Properties, Property } from '../components/screens'

const Routes = () => (
  <Switch>
    <Route exact path='/:slug' component={Property} />
    <Route path='/' component={Properties} />
  </Switch>
)

export default Routes
