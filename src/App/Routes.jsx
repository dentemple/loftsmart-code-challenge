import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Amenities from '../components/screens/Amenities'
import Properties from '../components/screens/Properties'
import PropertyDetail from '../components/screens/PropertyDetail'

const Routes = () => (
  <Switch>
    <Route exact path='/:slug/amenities' component={Amenities} />
    <Route exact path='/:slug' component={PropertyDetail} />
    <Route path='/' component={Properties} />
  </Switch>
)

export default Routes
