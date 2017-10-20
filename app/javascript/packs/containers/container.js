import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Spinner from 'react-spinkit'

const Container = (ComposedComponent) => {
  class ContainerComponent extends Component {
    render () {
      return (
        <div>
          {
            this.props.spinner &&
            <div className='spinner-container'>
              <Spinner fadeIn='none' name='folding-cube' />
            </div>
          }

          <ComposedComponent {...this.props} />
        </div>
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      spinner: state.spinner
    }
  }

  return connect(mapStateToProps, null)(ContainerComponent)
}

export default Container
