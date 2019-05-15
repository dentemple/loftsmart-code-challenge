import React from 'react'
import PropTypes from 'prop-types'
import { Link, Text } from '../atoms'

const ModalContainer = ({ children }) => (
  <>
    <Link to='/' style={{ alignSelf: 'flex-end', margin: 10 }}>
      <Text>Close</Text>
    </Link>
    {children}
  </>
)

ModalContainer.propTypes = {
  children: PropTypes.node
}

export default ModalContainer
