import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

const Header = (props) => {

  const dispatchLogout = () => {
    props.dispatchAuthLogout()
  }

  return (
    <section>
      <header className="shared-header">
          <a href="/">
            <h1 className="shared-header__title"> Wellness </h1>
          </a>
          
          <span
            className="shared-header__logout"
            onClick={ props.dispatchAuthLogout }>
              <i className="material-icons"> exit_to_app </i>
          </span>
      </header>
    </section>
  )
}

Header.propTypes = {
  dispatchAuthLogout: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
