import React from 'react'
import PropTypes from 'prop-types'

const PropertyCard = ({ property }) => (
  <article>
    <pre>
      <code>{JSON.stringify(property, null, 2)}</code>
    </pre>
  </article>
)

PropertyCard.propTypes = {
  property: PropTypes.shape({})
}

export default PropertyCard
