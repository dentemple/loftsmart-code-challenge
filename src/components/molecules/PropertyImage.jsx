import React from 'react'
import PropTypes from 'prop-types'

import { Image } from '../atoms'

const PropertyImage = ({ alt, url }) => (
  <Image alt={alt} src={`${url}`} style={{ maxHeight: 150, maxWidth: 150 }} />
)

PropertyImage.propTypes = {
  alt: PropTypes.number,
  url: PropTypes.string
}

export default PropertyImage
