import React from 'react'
import PropTypes from 'prop-types'

import { Link, Text } from '../atoms'

const AmenitiesLink = ({ count, handleClick, slug }) => {
  const formatAmenities = len => `${len}\xa0amenit${len === 1 ? 'y' : 'ies'}`

  return (
    <Text>
      <Link
        to={{
          pathname: `/${slug}/amenities`,
          state: { modal: true }
        }}
        onClick={handleClick}>
        {formatAmenities(count)}
      </Link>
    </Text>
  )
}

AmenitiesLink.propTypes = {
  count: PropTypes.number,
  handleClick: PropTypes.func,
  slug: PropTypes.string
}

export default AmenitiesLink
