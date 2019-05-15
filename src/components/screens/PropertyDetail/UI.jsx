import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TitleHeader from '../../organisms/TitleHeader'
import { Card } from '../../molecules'
import { propertyType } from '../../../types/api'

class PropertyDetail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string
      })
    }),
    populateProperty: PropTypes.func,
    property: propertyType
  }

  componentDidMount() {
    const { match, populateProperty } = this.props
    const { slug } = match.params

    populateProperty(slug)
  }

  render() {
    const { property } = this.props

    return (
      <>
        <TitleHeader title='PropertyDetail' />
        <Card style={{ fontSize: 12 }}>
          <pre>
            <code>{JSON.stringify(property, null, 2)}</code>
          </pre>
        </Card>
      </>
    )
  }
}

export default PropertyDetail
