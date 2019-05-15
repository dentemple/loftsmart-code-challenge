import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Article } from '../atoms'

const Card = ({ children, history, id, to, ...rest }) => (
  <Article onClick={() => history.push(to)} {...rest}>
    {children}
  </Article>
)

Card.propTypes = {
  children: PropTypes.node,
  history: PropTypes.shape({
    push: PropTypes.func
  }),
  id: PropTypes.string,
  to: PropTypes.string
}

export default withRouter(Card)
