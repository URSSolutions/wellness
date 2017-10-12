import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Webcam from 'react-webcam'

class Photo extends Component {
  constructor (props) {
    super(props)

    this.takePhoto = this.takePhoto.bind(this)
    this.resetPhoto = this.resetPhoto.bind(this)
  }

  takePhoto () {
    this.props.handlePhoto(this.webcam.getScreenshot())
  }

  resetPhoto () {
    this.props.handlePhoto()
  }

  render () {
    const { props } = this

    return (
      <div>
        {
          !props.photo &&
          <div>
            <div className='row'>
              <div className='field col s12 offset-m2 m8'>
                <Webcam
                  audio={ false }
                  height={ '100%' }
                  width={ '100%' }
                  ref={ (node) => this.webcam = node }
                  screenshotFormat='image/jpeg'
                />
              </div>
            </div>

            <div className='row'>
              <div className='field col s12'>
                <button className='user-home__photo-shoot' onClick={ this.takePhoto }>
                  <i className="material-icons"> add_a_photo </i> Tirar foto
                </button>
              </div>
            </div>
          </div>
        }

        {
          props.photo &&
          <div>
            <div className='row'>
              <div className='field col s12 offset-m2 m8'>
                <img
                  src={ props.photo }
                  alt='Foto tirada da refeição'
                />
              </div>
            </div>

            <div className='row'>
              <div className='field col s12'>
                <button className='user-home__photo-shoot' onClick={ this.resetPhoto }>
                  <i className="material-icons"> add_a_photo </i> Tirar outra foto
                </button>
              </div>
            </div>
          </div>
        }
      </div>

    )
  }
}

Photo.propTypes = {
  handlePhoto: PropTypes.func.isRequired,
  photo: PropTypes.string
}

export default Photo
