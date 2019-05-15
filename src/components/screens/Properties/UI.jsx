import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TitleHeader from '../../organisms/TitleHeader'
import { Section } from '../../atoms'

import PropertyCard from './PropertyCard'
import { propertiesType } from '../../../types/api'

class Properties extends Component {
  static propTypes = {
    populateProperties: PropTypes.func.isRequired,
    properties: propertiesType
  }

  componentDidMount() {
    const { populateProperties } = this.props
    populateProperties()
  }

  render() {
    const { properties } = this.props
    const hasProperties = !!properties && properties.length > 0

    return (
      <>
        <TitleHeader title='Properties' />
        {hasProperties && (
          <Section>
            {properties.map(property => (
              <PropertyCard {...property} key={property.id} />
            ))}
          </Section>
        )}
      </>
    )
  }
}

export default Properties
