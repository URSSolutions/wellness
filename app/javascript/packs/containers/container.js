import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const Container = (ComposedComponent) => {
  class ContainerComponent extends Component {
    render () {
      return (
        <div className={`${!!this.props.spinner ? 'loading' : '' }`}>
          {
            !!this.props.spinner &&
            <i className="loader fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
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
