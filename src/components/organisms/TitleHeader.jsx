import React from 'react'
import PropTypes from 'prop-types'

import { Header } from '../atoms'

const TitleHeader = ({ title }) => (
  <Header>
    <p>{title}</p>
  </Header>
)

TitleHeader.propTypes = {
  title: PropTypes.string
}
TitleHeader.defaultPropes = {
  title: ''
}

export default TitleHeader
