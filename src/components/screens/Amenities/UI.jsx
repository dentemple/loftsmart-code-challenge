import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TitleHeader from '../../organisms/TitleHeader'
import { Card, ModalContainer } from '../../molecules'

class Amenities extends Component {
  static propTypes = {
    amenities: PropTypes.arrayOf(PropTypes.shape({})),
    match: PropTypes.shape({
      params: PropTypes.shape({
        slug: PropTypes.string
      })
    }),
    location: PropTypes.shape({
      state: PropTypes.shape({
        modal: PropTypes.bool
      })
    }),
    populateProperty: PropTypes.func
  }

  componentDidMount() {
    const { match, populateProperty } = this.props
    const { slug } = match.params

    populateProperty(slug)
  }

  render() {
    const { amenities, location } = this.props

    const { state = {} } = location
    const { modal: isModal } = state

    const nestedComponents = (
      <Card style={{ fontSize: 12 }}>
        <pre>
          <code>{JSON.stringify(amenities, null, 2)}</code>
        </pre>
      </Card>
    )

    if (isModal) {
      return (
        <>
          <TitleHeader title='Amenities' />
          <ModalContainer>{nestedComponents}</ModalContainer>
        </>
      )
    }
    return (
      <>
        <TitleHeader title='Amenities' />
        {nestedComponents}
      </>
    )
  }
}

export default Amenities
