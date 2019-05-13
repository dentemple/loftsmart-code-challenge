import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <header>
    <p>{title}</p>
  </header>
)

Header.propTypes = {
  title: PropTypes.string
}
Header.defaultPropes = {
  title: ''
}

export default Header
