import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from '../actions/auth'

const Header = (props) => {
  return (
    <section>
      <header className="shared-header">
          <h1 className="shared-header__title"> Weelness </h1>

          <span
            className="shared-header__logout"
            onClick={ props.dispatchLogout }>
              <i className="material-icons"> exit_to_app </i>
          </span>
      </header>
    </section>
  )
}


export default Header
