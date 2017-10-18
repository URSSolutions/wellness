import React from 'react'
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
          <h1 className="shared-header__title"> Wellness </h1>

          <span
            className="shared-header__logout"
            onClick={ props.dispatchLogout }>
              <i className="material-icons"> exit_to_app </i>
          </span>
      </header>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(authActions, dispatch)
}

export default connect(null, mapDispatchToProps)(Header)
