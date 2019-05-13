import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { _testDispatch } from '../state/features/_testDispatch'

class RenderStore extends Component {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
  }

  static defaultProps = {
    store: {}
  }

  render() {
    const preStyle = {
      // box
      backgroundColor: '#f3f3f3',
      border: '0.5px solid #777',
      borderRadius: 10,
      minHeight: 100,
      margin: 40,
      padding: 20,

      // text
      fontFamily: 'monospace',
      lineHeight: '1.5',
      textAlign: 'left'
    }
    const buttonStyle = {
      fontFamily: 'monospace'
    }

    const { handleClick, store } = this.props

    return (
      <pre style={preStyle}>
        {JSON.stringify(store, null, 2)}
        <p>
          <button style={buttonStyle} onClick={handleClick}>
            Test Dispatch
          </button>
        </p>
      </pre>
    )
  }
}

const mapState = state => ({
  store: state
})

const mapDispatch = dispatch => ({
  handleClick: () => {
    dispatch(_testDispatch())
  }
})

export default connect(
  mapState,
  mapDispatch
)(RenderStore)
