import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { propertiesType } from '../../../types/api'

class Properties extends Component {
  static propTypes = {
    fetchProperties: PropTypes.func.isRequired,
    properties: propertiesType
  }

  componentDidMount() {
    const { fetchProperties } = this.props
    fetchProperties('afb2y')
  }

  render() {
    return (
      <div>
        <p>Properties</p>
      </div>
    )
  }
}

export default Properties
